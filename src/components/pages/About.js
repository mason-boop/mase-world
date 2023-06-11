import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return (
      <a className="about-link" href={`mailto:${email}${params}`}>
        {children}
      </a>
    );
  };

  return (
    <>
      <div className="about-box">
        <p className="about-me">
          My name is Mason and I am a software engineer, a graphic designer, and
          a photographer. I excel in TypeScript/JavaScript and specifically the
          Angular and React frameworks. I am detail-oriented, timely,
          communicative, and exceptional with object-oriented programming and
          frontend development.
        </p>
        <div className="about-links">
          <Link
            className="about-link"
            target={'_blank'}
            to="https://drive.google.com/uc?export=view&id=1ZUx6cOI1xx-cXbK8UkFsnCT8zmsBnFWa"
          >
            Resume
          </Link>
          {/* <Link className="about-link">Contact Me</Link> */}
          <Mailto email="mxdominey@gmail.com" subject="Contact Me" body="">
            Contact Me
          </Mailto>
        </div>
      </div>
    </>
  );
}

export default About;
