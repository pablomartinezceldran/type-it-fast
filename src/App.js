import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./screens/game.jsx";
import GameOver from "./screens/gameOver.jsx";
import Home from "./screens/home.jsx";
import HowToPlay from "./screens/howToPlay.jsx";
import NoPage from "./screens/noPage.jsx";
import Scores from "./screens/scores.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/play' element={<Game />} />
        <Route path='/howToPlay' element={<HowToPlay />} />
        <Route path='/scores' element={<Scores />} />
        <Route path='/gameOver' element={<GameOver />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
