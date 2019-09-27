import * as React from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { useState } from "react";

const NavSearch: React.FC = () => {
  const [dropdownStatusOpen, setDropdownStatusOpen] = useState(false);
  const [dropdownPapelOpen, setDropdownPapelOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white w-100">
      <div className="NavSearch__Image"></div>
      <form className="form-inline my-2 my-lg-0 ml-2 flex-grow-1">
        <input
          className="form-control mr-sm-2 border-0"
          type="search"
          placeholder="Procurar usuário..."
          aria-label="Pesquisar"
        ></input>
      </form>
      <ButtonDropdown
        isOpen={dropdownStatusOpen}
        toggle={() => setDropdownStatusOpen(!dropdownStatusOpen)}
      >
        <DropdownToggle
          caret
          className="bg-white border-0 text-dark font-weight-bold"
        >
          Status
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Ativo</DropdownItem>
          <DropdownItem>Suspenso</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <ButtonDropdown
        isOpen={dropdownPapelOpen}
        toggle={() => setDropdownPapelOpen(!dropdownPapelOpen)}
      >
        <DropdownToggle
          caret
          className="bg-white border-0 text-dark font-weight-bold"
        >
          Papel
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Aluno</DropdownItem>
          <DropdownItem>Instrutor</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </nav>
  );
};

export default NavSearch;
