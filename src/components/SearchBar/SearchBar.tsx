import * as React from "react";
import "./searchBar.scss";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchBar: React.FC = () => {
  const [dropdownStatusOpen, setDropdownStatusOpen] = useState(false);
  const [dropdownPapelOpen, setDropdownPapelOpen] = useState(false);

  return (
    <Container
      className="SearchBar__Container bg-white w-100 d-flex flex-row align-items-center m-0 p-0"
      noGutters
    >
      <Row className="w-100 mr-4">
        <Col
          xs="1"
          className="d-flex align-items-center justify-content-center p-0"
        >
          <Button
            className="border-0 d-flex justify-content-center align-items-center 
                              bg-transparent text-dark p-0"
          >
            <FontAwesomeIcon className="SearchBar__Icon" icon={faSearch} />
          </Button>
        </Col>
        <Col xs="9">
          <form className="form-inline ml-n4 w-100">
            <input
              className="form-control border-0 w-100 Main__RemoveOutline"
              type="search"
              placeholder="Procurar usuário..."
              aria-label="Pesquisar"
            ></input>
          </form>
        </Col>
        <Col xs="1">
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
        </Col>
        <Col xs="1">
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
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
