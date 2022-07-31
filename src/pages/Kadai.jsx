// pages/Kadai.jsx

import { useState, useEffect } from "react";
import axios from "axios";

export const Kadai = () => {

    const [loading, setLoading] = useState(true);
  //   use state()の()の中身は初期値
      // 🔽 位置情報取得の追加
      const [geoLocation, setGeoLocation] = useState(null);
      // 逆ジオコーディングの追加
      const [place, setPlace] = useState("");
      // グルメapi
      const [restaurant, setRestaurant] = useState("");
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

        // ここにhotpepper  gourmetを持ってくる
        const restaurantData = await axios.get(
            `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=15d307462672d2ed&lat=${latitude}&${longitude}=139.7629718&range=5&order=4&format=jsonp`
          );
          console.log(restaurantData.data);

          
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
    
    // ここからは表示
      return (
      <>
       {/* 🔽 ここから追加 */}
       <p>①まずは場所を表示させる</p>
       <table>
          <tbody>
            <tr>
              <td>場所</td>
              <td>{place}</td>
            </tr>
          </tbody>

        </table>

        <p>②ホットペッパーグルメの情報を表示させる</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>店舗名</th>
              <th>ジャンル</th>
              <th>住所</th>
              <th>リンク</th>
            </tr>
          </thead>
        </table>
      </>
    );
  };