/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import {
  Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle, Button,
} from 'reactstrap';
import { isBrowser } from 'react-device-detect';

// import component
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillAudio,
  AiFillCamera,
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
import DSILogo from '../Assets/images/DSI.png';
import Profile from '../Assets/images/profile.png';

export default function Home() {
  const onPenNewTab = (link) => {
    window.open(link, '_blank');
  };
  return isBrowser ? (
    <div id="home" className="home">
      <Navbar />
      <Jumbotron />
      <section id="work-experience" className="text-center bg-light">
        <div className="container col-md-5">
          <h2>Work Experience</h2>
          <div>
            <img alt="company-logos" src={DSILogo} style={{ width: 100, height: 50 }} />
            <h4>Digital Sekuriti Indonesia | Mobile Developer</h4>
            <p>March, 2021 - Now</p>
          </div>
        </div>
      </section>
      <section id="project">
        <div className="container">
          <h2 className="text-center text-white">My Project</h2>
          <CardGroup>
            <a href="https://github.com/FatkhulAmam/newsPortal-mobile" className="col-3 m-5 shadow-lg card-portofolio">
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Maos News
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    News Portal
                  </CardSubtitle>
                  <CardText>
                    Maos News is news portal App, Build with React Native for frontend and Nodejs for backend
                  </CardText>
                </CardBody>
              </Card>
            </a>
            <a href="https://github.com/FatkhulAmam/ecommerce-frontend" className="col-3 m-5 shadow-lg card-portofolio">
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Blanja App
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    ecommerce application
                  </CardSubtitle>
                  <CardText>
                    The ecommerce app to trade something, make transactions easy. Build with Reactjs, and nodejs
                  </CardText>
                </CardBody>
              </Card>
            </a>
            <a href="https://github.com/FatkhulAmam/moccoChat" className="col-3 m-5 shadow-lg card-portofolio">
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Mocco Chat
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    Chatting Application
                  </CardSubtitle>
                  <CardText>
                    You can have a short conversation with friends or family,
                    built with react native and node js.
                  </CardText>
                </CardBody>
              </Card>
            </a>
          </CardGroup>
        </div>
      </section>
      <section id="contact" className="bg-white technology">
        <h2 className="text-center mb-4">Technology</h2>
        <div className="d-flex justify-content-center text-center">
          <div className="col-3">
            <a href="https://www.javascript.com/" className="col-sm-3">
              <img alt="javascript" src={javascript} width={250} />
            </a>
          </div>
          <div className="col-3">
            <a href="https://nodejs.org/" className="col-sm-3">
              <img alt="node" src={node} width={250} />
            </a>
          </div>
          <div className="col-3">
            <a href="https://reactjs.org/" className="col-sm-3">
              <img alt="react" src={reactredux} width={250} />
            </a>
          </div>
          <div className="col-3">
            <a href="https://reactnative.dev/" className="col-sm-3">
              <img alt="reactnative" src={reactnative} width={250} />
            </a>
          </div>
        </div>
      </section>
      <section id="project" className="bg-light contact">
        <div className="container">
          <h2 className="text-center text-white">Contact</h2>
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
  ) : (
    <div id="home" className="home-mobile text-center">
      <div className="header-mobile">
        <h1>Hai....</h1>
        <h1>I Am Fatkhul Amam</h1>
        <h3>Mobile Developer</h3>
        <p>Look at me and lets's scroll down</p>
        <div className="d-flex justify-content-center mobile-image-wrap" style={{ height: 325 }}>
          <img src={Profile} alt="profile" className="mobile-profile" style={{ height: 310, width: 400 }} />
        </div>
      </div>
      <div className="footer-mobile text-center p-5">
        <h1>My Social Media</h1>
        <Button outline color="info" className="btn-wraper pt-2 pb-2" onClick={() => onPenNewTab('https://github.com/FatkhulAmam/')}>
          <AiOutlineGithub size={30} className="col-2" />
          <text>Github</text>
        </Button>
        <Button outline color="info" className="btn-wraper pt-2 pb-2" onClick={() => onPenNewTab('https://www.linkedin.com/in/fatkhul-amam/')}>
          <AiFillLinkedin size={30} className="col-2" />
          <text>Linkedin</text>
        </Button>
        <Button outline color="info" className="btn-wraper pt-2 pb-2" onClick={() => onPenNewTab('https://www.instagram.com/ftkhlmm_/')}>
          <AiFillInstagram size={30} className="col-2" />
          <text>Instagram</text>
        </Button>
        <Button outline color="info" className="btn-wraper pt-2 pb-2" onClick={() => onPenNewTab('https://twitter.com/ftkhlmm')}>
          <AiOutlineTwitter size={30} className="col-2" />
          <text>Twitter</text>
        </Button>
        <h1 className="pt-4">More</h1>
        <Button outline color="info" className="btn-wraper pt-2 pb-2" onClick={() => onPenNewTab('https://open.spotify.com/show/2q2Qf3iTU8b7RPjktFujxu')}>
          <AiFillAudio size={30} className="col-2" />
          <text>Podcast</text>
        </Button>
        <Button outline color="info" className="btn-wraper pt-2 pb-2" onClick={() => onPenNewTab('https://www.instagram.com/ftkhlmm_/')}>
          <AiFillCamera size={30} className="col-2" />
          <text>Photography</text>
        </Button>
      </div>
    </div>
  );
}
