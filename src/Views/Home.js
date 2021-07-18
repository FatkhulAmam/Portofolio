import React from 'react';

// import component
import {
  AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram,
} from 'react-icons/ai';
import Navbar from '../Components/Navbar';
import Jumbotron from '../Components/Jumbotron';
import CardContact from '../Components/CardContact';

// import style
import '../Assets/styles/Home.css';

// import assets
import javascript from '../Assets/images/javascript.jpeg';
import node from '../Assets/images/node.jpeg';
import reactredux from '../Assets/images/reactredux.jpeg';
import reactnative from '../Assets/images/reactnative.jpeg';

export default function Home() {
  return (
    <div id="home" className="home">
      <Jumbotron />
      <Navbar />
      <section id="work-experience" className="text-center p-5">
        <div className="container col-md-5">
          <h2>Work Experience</h2>
          <p>Digital Sekuriti Indonesia | 2020 - Now</p>
        </div>
      </section>
      <section id="project" className="p-5 bg-light">
        <div className="container">
          <h2 className="text-center">My Project</h2>
          <div className="row">
            <div className="col-2">
              <img src="https://via.placeholder.com/200x250.png" alt="placeholder" />
            </div>
            <div className="col">
              <table>
                <tr>
                  <td>1. </td>
                  <td>App Name: </td>
                  <td>Maos News</td>
                </tr>
                <tr>
                  <td>2. </td>
                  <td>Description: </td>
                  <td>
                    This application is built using the React Native framework,
                    and the backend uses Node.Js and the database uses Mysql and ORM sequelize.
                  </td>
                </tr>
                <tr>
                  <td>3. </td>
                  <td>Github Repo: </td>
                  <td><a href="https://github.com/ahmadAmam12/newsPortal-mobile.git">https://github.com/ahmadAmam12/newsPortal-mobile.git</a></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="stack" className="p-5 container">
        <h2 className="text-center mb-4">Technology</h2>
        <div className="row justify-content-between text-center">
          <div className="col-sm-3">
            <a href="https://www.javascript.com/" className="col-sm-3">
              <img alt="javascript" src={javascript} width={300} />
            </a>
          </div>
          <div className="col-sm-3">
            <a href="https://nodejs.org/" className="col-sm-3">
              <img alt="node" src={node} width={300} />
            </a>
          </div>
          <div className="col-sm-3">
            <a href="https://reactjs.org/" className="col-sm-3">
              <img alt="react" src={reactredux} width={300} />
            </a>
          </div>
          <div className="col-sm-3">
            <a href="https://reactnative.dev/" className="col-sm-3">
              <img alt="reactnative" src={reactnative} width={300} />
            </a>
          </div>
        </div>
      </section>
      <section id="project" className="p-5 bg-light">
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <div className="row justify-content-center contact-wrap">
            <div className="col-sm-3">
              <CardContact email title="Gmail" content="afatkhulamam@gmail.com" link="mailto:afatkhulamam@gmail.com" />
            </div>
            <div className="col-sm-3">
              <CardContact phone title="Phone / Whatsapp /Telegram" content="+62 81218263258" link="https://wa.me/6281218263258" />
            </div>
            <div className="col-sm-3">
              <CardContact address title="Address" content="Yogyakarta, Indonesia" link="https://www.google.com/maps/place/Yogyakarta,+Kota+Yogyakarta,+Daerah+Istimewa+Yogyakarta/@-7.803249,110.3398253,13z/data=!3m1!4b1!4m5!3m4!1s0x2e7a5787bd5b6bc5:0x21723fd4d3684f71!8m2!3d-7.7955798!4d110.3694896" />
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row ms-auto p-3 text-light">
            <div className="col">
              <p>Copyright &copy; Fatkhul amam 2021</p>
            </div>
            <div className="col text-center">
              <a href="https://github.com/FatkhulAmam" style={{ marginRight: 20 }}>
                <AiOutlineGithub size={30} />
              </a>
              <a href="https://www.linkedin.com/in/fatkhul-amam/" style={{ marginRight: 20 }}>
                <AiOutlineLinkedin size={30} />
              </a>
              <a href="https://twitter.com/ftkhlmm" style={{ marginRight: 10 }}>
                <AiOutlineTwitter size={30} />
              </a>
              <a href="https://www.instagram.com/ftkhlmm_/" style={{ marginLeft: 10 }}>
                <AiOutlineInstagram size={30} />
              </a>
            </div>
            <div className="col text-end">
              <p>Copyright &copy; Fatkhul amam 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
