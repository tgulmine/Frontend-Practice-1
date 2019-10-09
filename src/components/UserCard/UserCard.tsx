import * as React from "react";
import "./userCard.scss";
import { Input, Button, Container, Row, Col } from "reactstrap";

const UserCard: React.FC = () => {
  return (
    <Container
      className="UserCard__Container bg-transparent w-100 d-flex align-items-center justify-content-start p-0"
      noGutters
    >
      <Row className="d-flex justify-content-start">
        <Col className="d-flex align-items-center justify-content-center ml-4 p-0">
          <div className="UserCard__Image rounded-circle" />
        </Col>
        <Col className="ml-2 p-0 d-flex flex-column justify-content-center UserCard__DisplayText position-relative">
          <div className="text-dark font-weight-bold UserCard__LineHeight mt-1">
            Maito Gai
          </div>
          <div className="font-weight-bold UserCard__TextEmail UserCard__LineHeight mb-1 mt-1">
            maitogai@juventude.com
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserCard;
