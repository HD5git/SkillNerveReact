import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

export default function LongCards() {
  let toLeft = true;
  let cards_to_show = [
    {
      imgUrl: "https://telegra.ph/file/ba7ef99b722e64f1b02b0.png",
      title: "Basic",
      description: ".........................................."
    },
    {
      imgUrl: "https://telegra.ph/file/ba7ef99b722e64f1b02b0.png",
      title: "Path",
      description: ".........................................."
    },
    {
      imgUrl: "https://telegra.ph/file/ba7ef99b722e64f1b02b0.png",
      title: "Project",
      description: ".........................................."
    }
  ];
  return (
    <>
      {cards_to_show.map((aCard) => {
        toLeft = !toLeft;
        return (
          <Card className="long-cards-parent">
            <Row className={toLeft ? "long-card" : "long-card-inverted"}>
              <Col md="auto">
                <Card.Body>
                  <Card.Title>{aCard.title}</Card.Title>
                  <Card.Text>{aCard.description}</Card.Text>
                </Card.Body>
              </Col>
              <Col md="auto">
                <Image src={aCard.imgUrl} />
              </Col>
            </Row>
          </Card>
        );
      })}
    </>
  );
}
