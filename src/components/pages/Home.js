import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <div className="home-box">
        <Link className="home" to='/about'>
          Enter
        </Link>
      </div>
    </>
  );
}

export default Home;
