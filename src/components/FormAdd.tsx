import * as React from "react";
import { Button, Row, Col, Input } from "reactstrap";

const FormAdd: React.FC = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 d-flex flex-row justify-content-between align-items-center">
      <div>
        <form className="form-inline my-2 my-lg-0 ml-2 flex-grow-1">
          <input
            className="form-control mr-sm-2"
            type="name"
            placeholder="Nome"
            aria-label="Nome"
          ></input>
        </form>
      </div>
      <div>
        <form className="form-inline my-2 my-lg-0 ml-2 flex-grow-1">
          <input
            className="form-control mr-sm-2"
            type="surname"
            placeholder="Sobrenome"
            aria-label="Sobrenome"
          ></input>
        </form>
      </div>
      <div>
        <form className="form-inline my-2 my-lg-0 ml-2 flex-grow-1">
          <input
            className="form-control mr-sm-2"
            type="email"
            placeholder="E-mail"
            aria-label="E-mail"
          ></input>
        </form>
      </div>
      <Button className="font-weight-bold bg-white text-dark">Cancelar</Button>
      <Button className="font-weight-bold bg-success">Salvar</Button>
    </nav> */}
      <Row className="w-100" noGutters>
        <Col xs={12} sm={3}>
          <Input></Input>
        </Col>
        <Col xs={12} sm={3}>
          <Input></Input>
        </Col>
        <Col xs={12} sm={3}>
          <Input></Input>
        </Col>
        <Col xs={12} sm={3}>
          <Button className="w-100">salvar</Button>
        </Col>
      </Row>
    </>
  );
};

export default FormAdd;
