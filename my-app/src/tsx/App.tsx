import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import MyProfile from "./MyProfile";
import GameStart from "./GameStart";
import Chat from "./Chat";

import "../css/App.css";

function App() {
  return (
    <div className="App">
      <div className="page list">
        <Link to="/">
          <button className="rainbow-hover Home">
            <span className="sp">HOME</span>
          </button>
        </Link>
        <Link to="/game-start">
          <button className="rainbow-hover game-start">
            <span className="sp">GAME START</span>
          </button>
        </Link>
        <Link to="/my-profile">
          <button className="rainbow-hover history">
            <span className="sp">My Profile</span>
          </button>
        </Link>
        <Link to="/leader-board">
          <button className="rainbow-hover leader-board">
            <span className="sp">LEADER BOARD</span>
          </button>
        </Link>
        <Link to="/chat">
          <button className="rainbow-hover chat">
            <span className="sp">CHATTING</span>
          </button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-start" element={<GameStart />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/leader-board" element={<LeaderBoard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
