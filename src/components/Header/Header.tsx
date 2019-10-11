import * as React from "react";
import "./header.scss";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  onClickAddUser: () => void;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <div className="Header__Container">
      <div className="Header__Title h3 font-weight-bold">Usuários</div>
      <Button
        className="Header__Button h5 font-weight-bold d-flex align-items-center justify-content-around"
        onClick={props.onClickAddUser}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span className="ml-1">Adicionar</span>
      </Button>
    </div>
  );
};

export default Header;
