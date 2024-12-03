import React from "react";
import Image from 'react-bootstrap/Image';
import "../portfolio/head.css";
import Col from 'react-bootstrap/Col';
import profile from "../assests/images/profile.avif";
import html from "../assests/images/html.png";
import css from "../assests/images/css.webp";
import javascript from "../assests/images/javascript.png";
import bootstrap from "../assests/images/bootstrap.png";
import react from "../assests/images/react.jpg";
import git from "../assests/images/git.png";

function About() {
  return (<>
        <h1 style={{textAlign:"center",marginTop:"150px"}}>About Me</h1>
<div className="adiv1" id="About">
      <div className="adiv11">

      <Col xs={6} md={4}>
          <Image src={profile} alt="sowmya" roundedCircle  className="aimg"/>
        </Col>

        <h5>Front-end developer</h5>
        <p>
          As a recent graduate with a passion for web development, I specialize
          in creating dynamic and responsive user interfaces. I have hands-on
          experience with HTML, CSS, and Bootstrap for building clean,
          mobile-first websites. I'm proficient in JavaScript, React.js for
          building interactive web applications, and Node.js for server-side
          scripting. My goal is to leverage my skills in front-end development
          to create seamless, user-friendly experiences while continuously
          learning and adapting to the latest technologies in the web
          development field.
        </p>
      </div>
    <div className="adiv12">
      <h2 style={{textAlign:"center"}}>MY SKILLS</h2>
      <div className="skills">
      <Col xs={1} md={1} >
          <Image src={html} roundedCircle  style={{height:"50px",width:"50px"}} />
        </Col>
        <Col xs={1} md={1}>
          <Image src={css} roundedCircle style={{height:"50px",width:"50px"}} />
        </Col>
        <Col xs={1} md={1}>
          <Image src={javascript} roundedCircle  style={{height:"60px",width:"70px"}} />
        </Col>
        <Col xs={1} md={1}>
          <Image src={bootstrap} roundedCircle  style={{height:"50px",width:"50px"}}/>
        </Col>
        <Col xs={1} md={1}>
          <Image src={react} roundedCircle  style={{height:"60px",width:"60px"}}/>
        </Col>
        <Col xs={1} md={1}>
          <Image src={git} roundedCircle  style={{height:"50px",width:"50px"}}/>
        </Col>
      </div>
    </div>
</div>
  </>
  );
}
export default About;
