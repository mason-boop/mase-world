import Gallery from '../Gallery';
import './Photos.css';

function Photos() {
  return (
    <>
      <div className="photo-box">
        <p className="photo-blurb">
          Photography has been a hobby of mine since I was young. Below are
          examples that make me incredibly proud as I reflect on the moments I
          was able to capture. Photos taken on a Ricoh GR III primarily in black
          and white.
        </p>
        <Gallery type="photos" />
      </div>
      <div className="footer"></div>
    </>
  );
}

export default Photos;
