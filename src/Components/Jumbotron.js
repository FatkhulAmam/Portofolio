import React from 'react';
import { Jumbotron } from 'reactstrap';

// import style
import '../Assets/styles/Jumbotron.css';
import Profile from '../Assets/images/profile.jpeg';

export default function JumbotronComponent() {
  return (
    <section>
      <Jumbotron className="text-center">
        <img src={Profile} alt="profile" width={200} className="rounded-circle img-thumbnail" />
        <h1 className="display-3">Fatkhul Amam</h1>
        <p className="lead">Fullstack Developer</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,192L360,64L720,160L1080,96L1440,128L1440,320L1080,320L720,320L360,320L0,320Z" /></svg>
      </Jumbotron>
    </section>
  );
}
