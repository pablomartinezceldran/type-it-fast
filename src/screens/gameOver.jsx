import "./home.css";
import background from "../images/background_gameOver.jpg";
import { Link } from "react-router-dom";

function GameOver() {
  const handleStart = () => {
    console.log("handleStart");
  };

  const handleHtP = () => {
    console.log("handleHtP");
  };

  const handleScores = () => {
    console.log("handleScores");
  };

  return (
    <div className='background' style={{ backgroundImage: `url(${background})` }}>
      <div className='content'>
        <h1 className='title'>Game Over</h1>
        <h2 className='txt1 margin-bottom'>Score: {localStorage.getItem("score")}</h2>
        <div className='buttons'>
          <Link to='/play'>
            <button className='button b1' onClick={handleStart}>
              Try again
            </button>
          </Link>
          <Link to='/'>
            <button className='button b2' onClick={handleHtP}>
              Home
            </button>
          </Link>
          <Link to='/scores'>
            <button className='button b2' onClick={handleScores}>
              Scores
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
