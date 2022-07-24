// pages/Tabelog.jsx;

import { useState } from "react";
import { ActionButton } from "../components/ActionButton";

export const Tabelog = () => {
  // ラーメンゾーン
  const [sushiResult, setsushiResult] = useState("");

  const getsushi = () => {
    const result = ["日本橋蛎殻町 すぎた", "鮨 さいとう", "東麻布 天本"][
      Math.floor(Math.random() * 3)
    ];
    console.log(result);
    // 🔽 追加
    setsushiResult(result);

    const linksushi = () => {
      if(result === "日本橋蛎殻町 すぎた"){
        console.log(1);
        return(
        <>
          <a href="https://tabelog.com/tokyo/A1302/A130204/13018162/" target="blank">詳しくはこちら</a>
        </>
        )
      }else if(result =="鮨 さいとう"){
        console.log(2);
        <>
          <a href="https://tabelog.com/tokyo/A1302/A130204/13018162/" target="blank">詳しくはこちら</a>
        </>
      }else {
        console.log(3);
        <>
          <a href="https://tabelog.com/tokyo/A1302/A130204/13018162/" target="blank">詳しくはこちら</a>
        </>
      };
    };
  };

  // 焼肉ゾーン
  const [yakinikuResult, setyakinikuResult] = useState("");

  const getyakiniku = () => {
    const result = ["蕃 YORONIKU", "赤坂 らいもん", "焼肉 ジャンボ はなれ"][
      Math.floor(Math.random() * 3)
    ];
    console.log(result);
    // 🔽 追加
    setyakinikuResult(result);

  };

  // ラーメンゾーン
  const [ramenResult, setramenResult] = useState("");

  const getramen = () => {
    const result = ["Homemade Ramen 麦苗", "手打式超多加水麺 ののくら", "らぁ麺や 嶋"][
      Math.floor(Math.random() * 3)
    ];
    console.log(result);
    // 🔽 追加
    setramenResult(result);

  };
  

  return (
    <>
      <p>今日は何食べたい？</p>
      <ActionButton text="寿司" action={getsushi} />
      {/* 🔽 追加 */}
      <ActionButton text="焼肉" action={getyakiniku} />
      <ActionButton text="ラーメン" action={getramen} />
      <p>おすすめはこちら</p>
      <p>寿司：{sushiResult}</p>
      <p>焼肉：{yakinikuResult}</p>
      <p>ラーメン：{ramenResult}</p>
    </>
  );
};