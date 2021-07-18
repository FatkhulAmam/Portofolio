import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';

// import style
import '../Assets/styles/Jumbotron.css';
import Profile from '../Assets/images/profile.jpeg';

export default function JumbotronComponent() {
  const [widthIndex, setWidthIndex] = useState(false);

  const resizeApp = () => {
    if (window.innerWidth <= 600) {
      setWidthIndex(true);
    } else {
      setWidthIndex(false);
    }
  };

  window.addEventListener('resize', resizeApp);

  return (
    <Jumbotron className="d-flex align-items-center">
      {widthIndex ? (
        <div className="container">
          <div className="">
            <div className="about-me">
              <div className="ms-auto col-sm-3">
                <img src={Profile} alt="profile" className="rounded-circle img-thumbnail" />
              </div>
              <h3 className="display-6 font-weight-bold">Hii, i am Fatkhul Amam...</h3>
              <p>
                I am a mobile developer, who is highly dedicated
                to continuously developing mobile apps.
                I have experience developing mobile apps in JavaScript
                with the React Native framework. I also have other skills
                like building websites with React.Js
                (like the website you are currently visiting),
                backend development using Node.Js and Express.Js.
                <br />
                Keep learning...
              </p>
              <Button href="#work-experience" color="primary">
                See More...
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row align-items-center">
            <div className="about-me col-sm-9">
              <h3 className="display-6 font-weight-bold">Hii, i am Fatkhul Amam...</h3>
              <p>
                I am a mobile developer, who is highly dedicated
                to continuously developing mobile apps.
                I have experience developing mobile apps in JavaScript
                with the React Native framework. I also have other skills
                like building websites with React.Js
                (like the website you are currently visiting),
                backend development using Node.Js and Express.Js.
                <br />
                Keep learning...
              </p>
              <Button href="#work-experience" color="primary">
                See More...
              </Button>
            </div>
            <div className="ms-auto col-sm-3">
              <img src={Profile} alt="profile" className="rounded-circle img-thumbnail" />
            </div>
          </div>
        </div>
      )}
    </Jumbotron>
  );
}
