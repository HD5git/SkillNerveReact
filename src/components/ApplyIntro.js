import React from "react";
import { Image, Button, Jumbotron, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ApplyIntro() {
  let description = `description \n
   description \n \n\n
   description`;
  let imgUrl = "https://telegra.ph/file/277b71e29088a29b4601f.png";

  return (
    <Jumbotron className="center-block">
      <Row>
        <Col className="center">
          <p>{description}</p>
          <Button variant="primary">Apply Now</Button>
        </Col>
        <Col>
          <Image src={imgUrl} rounded />
        </Col>
      </Row>
    </Jumbotron>
  );
}
