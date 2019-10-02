import React, { useState } from "react";
import "../styles/main.scss";
import NavTitle from "../components/NavTitle";
import NavSearch from "../components/NavSearch";
import NavOrder from "../components/NavOrder";
import FormAdd from "../components/FormAdd";
import Card from "../components/Card";
import { Container } from "reactstrap";

const App: React.FC = () => {
  const [isShowing, setIsShowing] = useState(true);
  const onClickAddUserButton = () => {
    setIsShowing(!isShowing);
  };

  const renderForm = () => {
    if (isShowing) return <FormAdd />;

    return (
      <div className="d-none">
        <FormAdd />
      </div>
    );
  };

  return (
    <Container>
      <div className="Main__Container d-flex flex-column justify-content-start align-items-center">
        <NavTitle onClickAddUser={onClickAddUserButton}></NavTitle>
        <div className="d-flex flex-column justify-content-start align-items-center border rounded w-100">
          <NavSearch></NavSearch>
          <NavOrder></NavOrder>

          {renderForm()}

          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </Container>
  );
};

export default App;
