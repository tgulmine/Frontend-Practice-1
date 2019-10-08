import * as React from "react";
import "./userCard.scss";
import { Input, Button, Container, Row, Col } from "reactstrap";

const UserCard: React.FC = () => {
  return (
    <Container
      className="UserCard__Container bg-transparent w-100 d-flex align-items-center justify-content-start ml-3 p-0"
      noGutters
    >
      <Row className="d-flex justify-content-start">
        <Col className="d-flex align-items-center justify-content-center m-0 p-0">
          <div className="UserCard__Image rounded-circle" />
        </Col>
        <Col className="ml-4 p-0">
          <Row className="text-dark font-weight-bold">NoeSoddde</Row>
          <Row className="font-weight-bold UserCard__TextEmail">
            email@nice.com
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCard;
