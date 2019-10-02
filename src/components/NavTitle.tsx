import * as React from "react";
import { Button } from "reactstrap";

interface NavTitleProps {
  onClickAddUser: () => void;
}

const NavTitle: React.FC<NavTitleProps> = props => {
  return (
    <div className="NavTitle__Container">
      <div className="NavTitle__Title h3 font-weight-bold">Usuários</div>
      <Button
        className="NavTitle__Button h5 font-weight-bold border-0"
        onClick={props.onClickAddUser}
      >
        Adicionar
      </Button>
    </div>
  );
};

export default NavTitle;
