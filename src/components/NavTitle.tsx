import * as React from "react";
import "../styles/navTitle.scss";
import { Button } from "reactstrap";

const NavTitle: React.FC = () => {
  return (
    <div className="NavTitle__Container">
      <div className="NavTitle__Title h3 font-weight-bold">Usuários</div>
      <Button className="NavTitle__Button h5 font-weight-bold border-0">
        Adicionar
      </Button>
    </div>
  );
};

export default NavTitle;
