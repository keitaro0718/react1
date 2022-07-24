// App.jsx

// 🔽 Link を追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";
import { Tabelog } from "./pages/Tabelog";

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
          <Link to="/tabelog" style={{color: 'red'}}>お店検索</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/tabelog" element={<Tabelog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;