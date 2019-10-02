import * as React from "react";
import { Input, Button } from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faArrowsAltV
} from "@fortawesome/free-solid-svg-icons";

const ALUNO = "aluno";
const UPDATE_AT = "updateAt";

interface IOrderMap {
  [key: string]: { active: boolean; isUp: boolean };
}

const NavOrder: React.FC = () => {
  const [orderMap, setOrderMap] = useState<IOrderMap>({
    aluno: {
      active: true,
      isUp: true
    },
    updatedAt: {
      active: false,
      isUp: false
    },
    situation: {
      active: false,
      isUp: false
    }
  });

  const getIcon = (name: string) => {
    const orderable = orderMap[name];

    if (!orderable.active) {
      return faArrowsAltV;
    }
    if (orderable.isUp) {
      return faAngleUp;
    }

    return faAngleDown;
  };

  const onClickOrderable = (name: string) => {
    const orderable = orderMap[name];

    if (orderable.active) {
      setOrderMap({
        ...orderMap,
        [name]: {
          ...orderable,
          isUp: !orderable.isUp
        }
      });
    } else {
      let newOrderMap: IOrderMap = {};
      Object.keys(orderMap).forEach(key => {
        newOrderMap[key] = { active: name === key ? true : false, isUp: false };
      });
      setOrderMap(newOrderMap);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gray w-100">
      <Input
        type="checkbox"
        id="checkboxOrder"
        className="position-relative ml-0"
      />
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Aluno"
        onClick={() => {
          onClickOrderable(ALUNO);
        }}
      >
        <span className="mr-1">Aluno</span>
        <FontAwesomeIcon icon={getIcon("aluno")} />
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Situacao"
        onClick={() => {
          onClickOrderable("situation");
        }}
      >
        <span className="mr-1">Situação</span>
        <FontAwesomeIcon icon={getIcon("situation")} />
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Papel"
        disabled
      >
        Papel
      </Button>
      <Button
        className="bg-transparent border-0 text-dark text-uppercase font-weight-bold NavOrder__Button NavOrder__Button--Atualizado"
        onClick={() => {
          onClickOrderable("updatedAt");
        }}
      >
        <span className="mr-1">Atualizado em</span>
        <FontAwesomeIcon icon={getIcon("updatedAt")} />
      </Button>
    </nav>
  );
};

export default NavOrder;
