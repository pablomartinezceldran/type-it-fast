import "./home.css";
import background_1 from "../images/background_1.jpg";
import { Link } from "react-router-dom";
import { Home } from "./home.jsx";

function HowToPlay() {
  return (
    <div className='background' style={{ backgroundImage: `url(${background_1})` }}>
      <div className='content'>
        <h1 className='title'>How to play</h1>
        <div className='container'>
          <Link to='/' style={{ textDecoration: "none" }}>
            <p className='backButton'>{"<"} Back</p>
          </Link>
          <div className='rules'>
            <p className='text'>
              GOAL
              <br />
              The game goal is to score as many points as possible by typing the right
              first letter of the images appearing on the screen.
              <br />
              <br />
              HOW TO SCORE
              <br />
              In the game area different images will appear from the left side of the
              screen and move to the right side. The images are “destroyed” only when the
              User types the first letter of an image's name. A fast-moving image
              destroyed very close to the left edge of the screen with a single key-press
              gets the User the most points. The more time the User plays the more images
              on the screen and the faster they will move.
              <br />
              <br />
              GAME OVER
              <br />
              The game is over if an image goes all the way through the screen and touches
              the right side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToPlay;
