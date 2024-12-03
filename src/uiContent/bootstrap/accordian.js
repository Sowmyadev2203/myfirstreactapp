import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Btaccordion(props) {
  return (
    <>
      <Accordion>
        <Accordion.Item>
          <Accordion.Header>{props.title}</Accordion.Header>
          <Accordion.Body>
            <img src={props.img} alt="img" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default Btaccordion;
