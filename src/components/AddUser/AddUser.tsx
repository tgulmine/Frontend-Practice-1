import * as React from "react";
import "./addUser.scss";
import { Button, Row, Col, Input, Container } from "reactstrap";

interface AddUserProps {
  onClickCancel: () => void;
  onClickSave: () => void;
}

const AddUser: React.FC<AddUserProps> = props => {
  return (
    <Container className="AddUser__Container bg-white w-100 d-flex flex-row align-items-center m-0 p-0">
      <Row className="w-100 ml-3 mr-3 p-0">
        <Col
          xs="3"
          className="d-flex flex-row align-items-center justify-content-center p-0"
        >
          <form className="form-inline w-100 justify-content-center">
            <input
              className="AddUser__Form form-control font-weight-bold"
              type="name"
              placeholder="Nome"
              aria-label="Nome"
            ></input>
          </form>
        </Col>
        <Col
          xs="3"
          className="d-flex flex-row align-items-center justify-content-center p-0"
        >
          <form className="form-inline w-100 justify-content-center">
            <input
              className="AddUser__Form form-control font-weight-bold"
              type="surname"
              placeholder="Sobrenome"
              aria-label="Sobrenome"
            ></input>
          </form>
        </Col>
        <Col
          xs="3"
          className="d-flex flex-row align-items-center justify-content-center p-0"
        >
          <form className="form-inline w-100 justify-content-center">
            <input
              className="AddUser__Form form-control font-weight-bold"
              type="email"
              placeholder="E-mail"
              aria-label="E-mail"
            ></input>
          </form>
        </Col>
        <Col
          xs="3"
          className="d-flex flex-row align-items-center justify-content-around p-0"
        >
          <Button
            className="AddUser__Button font-weight-bold bg-white text-dark"
            onClick={props.onClickCancel}
          >
            Cancelar
          </Button>
          <Button
            className="AddUser__Button AddUser__Button--Salvar font-weight-bold"
            onClick={props.onClickSave}
          >
            Salvar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;
