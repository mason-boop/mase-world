import Gallery from '../Gallery';
import './Photos.css';

function Photos() {
  return (
    <>
      <div className="photo-box">
        <p className="photo-blurb">
          This is a selection photos I'm really proud of. Photography has been a
          hobby of mine since I was young, and something I wish I did more
          often. Most photos are digital black & white taken on a Ricoh GR III.
        </p>
        <Gallery type="photos" />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Photos;
