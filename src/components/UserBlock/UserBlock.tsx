import * as React from "react";
import "./userBlock.scss";
import { Input, Button, Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const UserBlock: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const renderStatusButton = () => {
    if (isActive)
      return (
        <Button
          className="bg-white border text-dark font-weight-bolder UserBlock__ButtonStatus 
            UserBlock__ButtonStatus--Ativo d-flex flex-row justify-content-around align-items-center"
          onClick={() => setIsActive(false)}
        >
          <FontAwesomeIcon
            className="UserBlock__IconCircle UserBlock__IconCircle--Ativo"
            icon={faCircle}
          />
          <span className="font-weight-bold">Ativo</span>
        </Button>
      );

    return (
      <Button
        className="border text-dark font-weight-bolder UserBlock__ButtonStatus 
            UserBlock__ButtonStatus--Suspenso d-flex flex-row justify-content-around align-items-center"
        onClick={() => setIsActive(true)}
      >
        <FontAwesomeIcon
          className="UserBlock__IconCircle UserBlock__IconCircle--Suspenso"
          icon={faCircle}
        />
        <span className="font-weight-bold">Suspenso</span>
      </Button>
    );
  };

  const [countPapel, setCountPapel] = useState(0); //0 = Aluno, 1 = Instrutor, 2 = Aluno + Instrutor

  const renderPapel = () => {
    if (countPapel === 0) {
      return (
        <Button
          className="bg-transparent border-0 text-dark font-weight-bold UserBlock__ButtonStatus"
          onClick={() => {
            setCountPapel(countPapel + 1);
          }}
        >
          <span className="mr-2">Aluno</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </Button>
      );
    } else if (countPapel === 1) {
      return (
        <Button
          className="bg-transparent border-0 text-dark font-weight-bold UserBlock__ButtonStatus"
          onClick={() => {
            setCountPapel(countPapel + 1);
          }}
        >
          <span className="mr-2">Instrutor</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </Button>
      );
    }
    return (
      <Button
        className="bg-transparent border-0 text-dark font-weight-bold UserBlock__ButtonStatus"
        onClick={() => {
          setCountPapel(0);
        }}
      >
        <span className="mr-2">Aluno + Instrutor</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </Button>
    );
  };

  return (
    <Container
      className="UserBlock__Container border-top bg-white w-100 d-flex flex-row align-items-center m-0 p-0"
      noGutters
    >
      <Input
        type="checkbox"
        id="checkboxOrder"
        className="position-relative ml-3 mr-3"
      />
      <Row className="w-100">
        <Col className="d-flex justify-content-center align-items-center">
          User Card
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {renderStatusButton()}
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {renderPapel()}
        </Col>
        <Col className="d-flex justify-content-center align-items-center text-dark font-weight-bolder">
          22/01/2018
        </Col>
      </Row>
      <div className="UserBlock__Trash--Border border d-flex justify-content-center align-items-center ml-3 mr-3">
        <div className="UserBlock__Trash"></div>
      </div>
    </Container>
  );
};

export default UserBlock;
