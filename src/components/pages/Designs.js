import './Designs.css';
import Gallery from '../Gallery';

function Designs() {
  return (
    <>
      <div className="design-box">
        <p className="design-blurb">
          Below is a sample of some of my graphic design work. Most are
          promotional show flyers for the Atlanta local music scene that I'm an
          active member of.
        </p>
        <Gallery type="designs" />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Designs;
