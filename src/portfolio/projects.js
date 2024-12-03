import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../portfolio/head.css";
import chatbot from "../assests/images/chatbot.jpg";
import dataset from "../assests/images/companydataset.webp";
import hangman from "../assests/images/hangman.png";
import myfood from "../assests/images/myfood.png";
import temp from "../assests/images/project-1.png";
import port from "../assests/images/port.png";

function Projects() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "150px" }}>MY PROJECTS</h1>

      <div className="pdiv1" id="projects">
        <Card style={{ width: "18rem",height:"60%" }}>
          <Card.Img variant="top" src={chatbot} style={{height:"220px"}}  />
          <Card.Body>
            <Card.Title>University Enquiry chatbot</Card.Title>
            <Card.Text>A university inquiry chatbot provides prospective students with 
              instant responses to questions about admissions, programs, deadlines, and campus life. It enhances the user experience by offering personalized guidance and 24/7 support.
              
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem",height:"60%" }}>
          <Card.Img variant="top" style={{height:"220px"}} src={dataset} />
          <Card.Body>
            <Card.Title>Company Dataset Analysis</Card.Title>
            <Card.Text>
            A company dataset analysis project involves examining business data to uncover insights, trends, and patterns that inform decision-making. It typically includes data cleaning, visualization, and 
            predictive modeling to optimize operations and strategy.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem",height:"60%" }}>
          <Card.Img variant="top" src={myfood} style={{height:"220px"}}  />
          <Card.Body>
            <Card.Title>MyFood</Card.Title>
            <Card.Text>
              My food is a project to the display the famous food using HTML and CSS provides a simple structure for a webpage, typically including a header,body and footer. 
              It uses CSS for styling elements like fonts, colors,ensuring a visually appealing design.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>

      <br />

      <div className="pdiv2">
        <Card style={{ width: "18rem",height:"60%" }}>
          <Card.Img variant="top"  style={{height:"220px"}} src={hangman} />
          <Card.Body>
            <Card.Title>Hangman Game</Card.Title>
            <Card.Text>
            The Hangman game project is a simple word-guessing game where players try to identify a hidden word by suggesting letters within a limited number of attempts.
             It involves implementing logic for word selection, user input validation, and tracking game progress.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem",height:"60%" }}>
          <Card.Img variant="top" src={port} style={{height:"220px"}}  />
          <Card.Body>
            <Card.Title>Portfolio</Card.Title>
            <Card.Text>
            A portfolio project showcases a collection of an individual's best work, demonstrating skills, creativity, and expertise in a particular field. It serves as a personal branding tool to attract 
            potential clients or employers by highlighting key achievements and projects.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem",height:"60%" }}>
          <Card.Img variant="top" style={{height:"220px"}} src={temp} />
          <Card.Body>
            <Card.Title>Template</Card.Title>
            <Card.Text>
            A basic  template to show case the image gallery using HTML and CSS provides a simple structure for a webpage, typically including a header, main content area, and footer. It uses CSS for styling elements like fonts, colors, and layout, ensuring a visually appealing design.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Projects;
