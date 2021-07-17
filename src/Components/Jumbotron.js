import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

// import style
import '../Assets/styles/Jumbotron.css';
import Profile from '../Assets/images/profile.jpeg';

export default function JumbotronComponent() {
  return (
    <Jumbotron>
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="flex-shrink-1 about-me">
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
          <div className="flex-shrink-0 ms-auto">
            <img src={Profile} alt="profile" width={300} className="rounded-circle img-thumbnail" />
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}
