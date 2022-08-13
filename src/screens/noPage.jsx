import "./home.css";
import background from "../images/background_404.jpg";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className='background' style={{ backgroundImage: `url(${background})` }}>
      <div className='content'>
        <h1 className='title'>Page not found</h1>
        <Link to='/' style={{ textDecoration: "none" }}>
          <p className='backButton'>Go Home</p>
        </Link>
      </div>
    </div>
  );
}

export default NoPage;
