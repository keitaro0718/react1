// ActionButton.jsx

// componentを他のファイルでimportするためには、下記のように関数にexportと付ける必要がある

// 🔽 propsを追加
export const ActionButton = ({ text, action }) => {
    return (
      <>
        {/* 🔽 `onClick` でクリック時に指定した関数を実行できる */}
        <button type="button" onClick={action}>{ text }</button>
      </>
    );
  };