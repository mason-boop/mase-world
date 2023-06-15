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
          My name is Mason Dominey. I am a software engineer, a graphic
          designer, and a photographer. I have 3 years experience as a frontend
          developer excelling in TypeScript/JavaScript and specifically React
          and Angular 12+. I am detail-oriented, timely, collaborative, and
          communicative, with a passion for developing solutions and learning
          new technologies.
        </p>
        <div className="about-links">
          <Link
            className="about-link"
            target={'_blank'}
            to="https://drive.google.com/uc?export=view&id=1ZUx6cOI1xx-cXbK8UkFsnCT8zmsBnFWa"
          >
            Resume
          </Link>
          <Mailto email="mxdominey@gmail.com" subject="Contact Me" body="">
            Contact Me
          </Mailto>
        </div>
      </div>
    </>
  );
}

export default About;
