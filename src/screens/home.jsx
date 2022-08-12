import "./home.css";
import background_1 from "../images/background_1.jpg";
import { Link } from "react-router-dom";

function Home() {
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
    <div className='background' style={{ backgroundImage: `url(${background_1})` }}>
      <div className='content'>
        <h1 className='title'>Type it Fast</h1>
        <div className='buttons'>
          <Link to='play'>
            <button className='button b1' onClick={handleStart}>
              Start
            </button>
          </Link>
          <Link to='howToPlay'>
            <button className='button b2' onClick={handleHtP}>
              How to play
            </button>
          </Link>
          <Link to='scores'>
            <button className='button b2' onClick={handleScores}>
              Scores
            </button>
          </Link>
        </div>
        <div className='footer'></div>
      </div>
    </div>
  );
}

export default Home;
