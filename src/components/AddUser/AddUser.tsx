import * as React from "react";
import "./addUser.scss";
import { Button, Row, Col, Input } from "reactstrap";

interface AddUserProps {
  onClickCancel: () => void;
  onClickSave: () => void;
}

const AddUser: React.FC<AddUserProps> = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 d-flex flex-row justify-content-between align-items-center">
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
      <Button
        className="font-weight-bold bg-white text-dark"
        onClick={props.onClickCancel}
      >
        Cancelar
      </Button>
      <Button
        className="font-weight-bold bg-success"
        onClick={props.onClickSave}
      >
        Salvar
      </Button>
    </nav>
  );
};

export default AddUser;
