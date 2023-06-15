import './Designs.css';
import Gallery from '../Gallery';

function Designs() {
  return (
    <>
      <div className="design-box">
        <p className="design-blurb">
          Below are notable samples of my graphic design work,
          many of which served as Atlanta-music promotional show flyers that
          reached hundreds of audience members and increased revenue for venues.
        </p>
        <Gallery type="designs" />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Designs;
