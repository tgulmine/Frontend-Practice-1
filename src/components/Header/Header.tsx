import * as React from "react";
import "./header.scss"
import { Button } from "reactstrap";

interface HeaderProps {
  onClickAddUser: () => void;
}

const Header: React.FC<HeaderProps> = props => {
  return (
    <div className="Header__Container">
      <div className="Header__Title h3 font-weight-bold">Usuários</div>
      <Button
        className="Header__Button h5 font-weight-bold border-0"
        onClick={props.onClickAddUser}
      >
        Adicionar
      </Button>
    </div>
  );
};

export default Header;
