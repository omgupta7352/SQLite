import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-background">
      <div className='home-container'>
        <div className='home-heading-container'>
          <h1 className='home-heading'>SQLite - Write Your Queries{<br />}</h1>
          <h2 className='blue'>
          Welcome to SQL Editor. Make it work, make it right, make it fast.
          </h2>
          <Link to='/editor'>
            <button className='button'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
