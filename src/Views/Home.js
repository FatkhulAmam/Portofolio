import React from 'react';

// import component
import Navbar from '../Components/Navbar';
import Jumbotron from '../Components/Jumbotron';

// import assets
import javascript from '../Assets/images/javascript.jpeg';
import node from '../Assets/images/node.jpeg';
import reactredux from '../Assets/images/reactredux.jpeg';
import reactnative from '../Assets/images/reactnative.jpeg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <section id="about" className="text-center">
        <div className="container col-md-5">
          <h2>About Me</h2>
          <p>
            A Fullstack Developer who is highly dedicated
            to continue developing mobile and web applications.
            Experience with Javascript programming language with Node.js
            and Express.js as backend, and Reactjs as frontend.
            Have a high curiosity and enthusiasm for doing new things.
          </p>
        </div>
      </section>
      <hr className="m-5" />
      <section id="work-experience" className="text-center">
        <div className="container col-md-5">
          <h2>Work Experience</h2>
          <p>Digital Sekuriti Indonesia | 2020 - Now</p>
        </div>
      </section>
      <section id="stack" className="container mt-5">
        <div className="row container">
          <a href="https://www.javascript.com/" className="col-sm-3">
            <img alt="javascript" src={javascript} width={300} />
          </a>
          <a href="https://nodejs.org/" className="col-sm-3">
            <img alt="node" src={node} width={300} />
          </a>
          <a href="https://reactjs.org/" className="col-sm-3">
            <img alt="react" src={reactredux} width={300} />
          </a>
          <a href="https://reactnative.dev/" className="col-sm-3">
            <img alt="reactnative" src={reactnative} width={300} />
          </a>
        </div>
      </section>
      <footer className="bg-secondary mt-5">
        <div className="container">
          <div className="row ms-auto p-3 text-light">
            <div className="col">
              <p>Copyright &copy; Fatkhul amam 2021</p>
            </div>
            <div className="col text-end">
              <p>Gacho &trade;</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
