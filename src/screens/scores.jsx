import "./home.css";
import background from "../images/background_main.jpg";
import { Link } from "react-router-dom";

function Scores() {
  return (
    <div className='background' style={{ backgroundImage: `url(${background})` }}>
      <div className='content'>
        <h1 className='title'>Scores</h1>
        <div className='container'>
          <Link to='/' style={{ textDecoration: "none" }}>
            <p className='backButton'>{"<"} Home</p>
          </Link>
          <br />
          <div className='frame'>
            <div className='scores'>Last score: {localStorage.getItem("score")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scores;
