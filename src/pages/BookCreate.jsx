// pages/BookCreate.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import weatherJson from "../static/weather.json";

export const BookCreate = () => {

  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
//   use state()の()の中身は初期値
    // 🔽 選択処理の追加
    const [book, setBook] = useState("");
    // 🔽 位置情報取得の追加
    const [geoLocation, setGeoLocation] = useState(null);
    // 逆ジオコーディングの追加
    const [place, setPlace] = useState("");
    // 天気api
    const [weather, setWeather] = useState("");

    // 非同期処理はasync関数
  const getBooks = async (keyword) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${url}${keyword}`);
    console.log(result.data);
    setBooks(result.data.items ?? []);
    // 検索結果のデータがヒットしなかった場合、配列の形じゃないとエラーが出るため、空配列[]を入れておく。??は、左辺がnullの場合に右辺を返すという指示
  };
    // 🔽 追加
    const selectBook = (book) => {
        setBook(book.volumeInfo.title);
    };

    // 🔽 追加
    const success = async (position) => {
        const { latitude, longitude } = position.coords;
        setGeoLocation({ latitude, longitude });
        // 緯度経度を受信したら、逆ジオコーディング開始
        const placeData = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          console.log(placeData.data);
          setPlace(placeData.data.display_name);
        // 住所を表示したら、その住所をもとに天気データ取得開始
        const weatherData = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`
          );
          console.log(weatherData.data);
          setWeather(weatherJson[weatherData.data.daily.weathercode[0]]);

        setLoading(false);
    };

    // 🔽 追加
    const fail = (error) => console.log(error);

    // 🔽 追加
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, fail);
    }, []);
    // useeffectはページを開いた時のみ行う処理
    
    // まだ読み込み中なのであれば、nowloadingを表示
    if (loading) {
        return <p>now loading...</p>;
      }
  
    return (
    <>
     {/* 🔽 ここから追加 */}
     <table>
        <tbody>
          <tr>
            <td>場所</td>
            <td>{place}</td>
          </tr>
          <tr>
            <td>天気</td>
            <td>{weather}</td>
          </tr>
          <tr>
            <td>読んだ本</td>
            <td>{book}</td>
          </tr>
        </tbody>
      </table>
      {/* 🔼 ここまで追加 */}
      <p>キーワードで検索する</p>
      <input type="text" onChange={(e) => getBooks(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>書籍名</th>
            <th>出版社</th>
            <th>出版年</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          {books.map((x, i) => (
            <tr key={i}>
              <td>
                <button type="button" onClick={() => selectBook(x)}>選択</button>
              </td>
              <td>{x.volumeInfo.title}</td>
              <td>{x.volumeInfo.publisher}</td>
              <td>{x.volumeInfo.publishedDate}</td>
              <td>
                <a
                  href={x.volumeInfo.infoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
