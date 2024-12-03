import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
// import About from "./about";
import "../portfolio/head.css";
import img from "../assests/images/mainimg.avif";



function Head() {
  return (
    <div className="text-white bg-dark">
      <Navbar bg="dark" data-bs-theme="dark" className="w-100 navbar">
        <Container fluid>
          {" "}
          <Navbar.Brand href="#home"><span style={{color:"orangered"}}>PORT</span>folio</Navbar.Brand>
          <Nav className="me nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#projects">projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="div1" id="home">
        <div>
          <h3>Hello!</h3>
            <h1>i'm <span style={{color:"orangered"}}>Katepalli Sowmya</span></h1>
            <h2>Front-end Developer</h2>
            <p>i am a front-end developer experience in creating responsive webpages</p>
            <Button variant="outline-danger">Download Resume</Button>
        </div>


        <div>
        <img 
           
            src={img}  
            alt="img" 
            className="profile-image" 
          />
          
        </div>
      </div>
    </div>
  );
}

{/* <About/> */}

export default Head;
