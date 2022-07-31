// App.jsx

// 🔽 Link を追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { BookCreate } from "./pages/BookCreate";
import { Tabelog } from "./pages/Tabelog";
import { Kadai } from "./pages/Kadai";
import { Gourmet } from "./pages/Gourmet";


const App = () => {
  return (
    <BrowserRouter>
      <h1 class="title_name">React app</h1>
      {/* 🔽 追加 */}
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
        <li>
          <Link to="/book-create">投稿する</Link>
        </li>
        <li>
          <Link to="/tabelog" style={{color: 'red'}}>お店検索</Link>
        </li>
        <li>
          <Link to="/kadai" style={{color: 'red'}}>お店＆翻訳</Link>
        </li>
        <li>
          <Link to="/gourmet">テスト</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/book-create" element={<BookCreate />} />
        <Route path="/tabelog" element={<Tabelog />} />
        <Route path="/kadai" element={<Kadai />} />
        <Route path="/gourmet" element={<Gourmet />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;