// pages/Omikuji.jsx

import { ActionButton } from "../components/ActionButton.jsx";

export const Omikuji = () => {
  // 🔽 追加
  const getOmikuji = () => {
    const result = ["大吉", "中吉", "小吉", "凶", "大凶"][
      Math.floor(Math.random() * 5)
    ];
    console.log(result);
  };

  return (
    <>
      <p>おみくじの画面</p>
      {/* 🔽 編集 */}
      <ActionButton text="おみくじをひく" action={getOmikuji} />
    </>
  );
};