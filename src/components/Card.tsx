import * as React from "react";
import { Input, Button } from "reactstrap";
import { useState } from "react";

const Card: React.FC = () => {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-white w-100 border-top">
      <Input
        type="checkbox"
        id="checkboxOrder"
        className="position-relative ml-0"
      />
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Aluno"
        active={buttonAluno}
        onClick={() => setActiveButton(1)}
      >
        Aluno
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Situacao"
        active={buttonSituacao}
        onClick={() => setActiveButton(2)}
      >
        Situação
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Papel"
        active={buttonPapel}
        onClick={() => setActiveButton(3)}
      >
        Papel
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Atualizado"
        active={buttonAtualizado}
        onClick={() => setActiveButton(4)}
      >
        Atualizado em
      </Button>
      <div className="Card__Trash--Border border d-flex justify-content-center align-items-center">
        <div className="Card__Trash"></div>
      </div>
    </nav>
  );
};

export default Card;
