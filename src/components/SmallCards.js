import React from "react";
import { Card, ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";

export default function SmallCards() {
  let cards_to_show = [
    {
      imgUrl: "https://telegra.ph/file/98f3d9eeed9ded862c1a7.png",
      text: "Basics"
    },
    {
      imgUrl: "https://telegra.ph/file/98f3d9eeed9ded862c1a7.png",
      text: "Path"
    },
    {
      imgUrl: "https://telegra.ph/file/98f3d9eeed9ded862c1a7.png",
      text: "Project"
    }
  ];

  return (
    <Row>
      {cards_to_show.map((aCard) => (
        <Col className="center">
          <Card>
            <Card.Img
              variant="top"
              src={aCard.imgUrl}
              style={{ height: 200, width: 300 }}
            />

            <Card.Body className="center">
              <Card.Link href="#">{aCard.text}</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
