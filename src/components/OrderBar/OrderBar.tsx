import * as React from "react";
import "./orderBar.scss";
import { Input, Button, Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faArrowsAltV
} from "@fortawesome/free-solid-svg-icons";

const ALUNO = "aluno";
const UPDATE_AT = "updatedAt";
const PAPEL = "papel";
const SITUATION = "situation";

interface IOrderMap {
  [key: string]: { active: boolean; isUp: boolean };
}

const OrderBar: React.FC = () => {
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
    },
    papel: {
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
    <Container
      className="OrderBar__Container bg-gray w-100 d-flex flex-row align-items-center m-0 p-0"
      noGutters
    >
      <Input
        type="checkbox"
        id="checkboxOrder"
        className="position-relative ml-3 mr-3"
      />
      <Row className="w-100 no-gutters">
        <Col xs="3">
          <Button
            className="bg-transparent border-0 text-dark text-uppercase font-weight-bold OrderBar__Button"
            onClick={() => {
              onClickOrderable(ALUNO);
            }}
          >
            <span className="mr-1">Aluno</span>
            <FontAwesomeIcon icon={getIcon(ALUNO)} />
          </Button>
        </Col>
        <Col xs="3">
          <Button
            className="bg-transparent border-0 text-dark text-uppercase font-weight-bold OrderBar__Button"
            onClick={() => {
              onClickOrderable(SITUATION);
            }}
          >
            <span className="mr-1">Situação</span>
            <FontAwesomeIcon icon={getIcon(SITUATION)} />
          </Button>
        </Col>
        <Col xs="3">
          <Button
            className="bg-transparent border-0 text-dark text-uppercase font-weight-bold OrderBar__Button"
            onClick={() => {
              onClickOrderable(PAPEL);
            }}
          >
            <span className="mr-1">Papel</span>
            <FontAwesomeIcon icon={getIcon(PAPEL)} />
          </Button>
        </Col>
        <Col>
          <Button
            className="bg-transparent border-0 text-dark text-uppercase font-weight-bold OrderBar__Button"
            onClick={() => {
              onClickOrderable(UPDATE_AT);
            }}
          >
            <span className="mr-1">Atualizado em</span>
            <FontAwesomeIcon icon={getIcon(UPDATE_AT)} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderBar;
