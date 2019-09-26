import * as React from "react";
import "../styles/navOrder.scss";
import { Input, Button } from "reactstrap";
import { useState } from "react";

const NavOrder: React.FC = () => {
  const [buttonAluno, setButtonAluno] = useState(false);
  const [buttonSituacao, setButtonSituacao] = useState(false);
  const [buttonPapel, setButtonPapel] = useState(false);
  const [buttonAtualizado, setButtonAtualizado] = useState(false);

  function setActiveButton(buttonPressed: number) {
    setButtonAluno(false);
    setButtonSituacao(false);
    setButtonPapel(false);
    setButtonAtualizado(false);
    if (buttonPressed === 1) setButtonAluno(true);
    else if (buttonPressed === 2) setButtonSituacao(true);
    else if (buttonPressed === 3) setButtonPapel(true);
    else if (buttonPressed === 4) setButtonAtualizado(true);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gray w-100">
      <Input type="checkbox" id="checkboxOrder" />
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button"
        active={buttonAluno}
        onClick={() => setActiveButton(1)}
      >
        Aluno
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button"
        active={buttonSituacao}
        onClick={() => setActiveButton(2)}
      >
        Situação
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button"
        active={buttonPapel}
        onClick={() => setActiveButton(3)}
      >
        Papel
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button"
        active={buttonAtualizado}
        onClick={() => setActiveButton(4)}
      >
        Atualizado em
      </Button>
    </nav>
  );
};

export default NavOrder;
