import * as React from "react";
import "../styles/main.scss";
import NavTitle from "../components/NavTitle";
import NavSearch from "../components/NavSearch";
import NavOrder from "../components/NavOrder";
import FormAdd from "../components/FormAdd";
import Card from "../components/Card";

const App: React.FC = () => {
  return (
    <div className="Main__Container d-flex flex-column justify-content-start align-items-center">
      <NavTitle></NavTitle>
      <div className="d-flex flex-column justify-content-start align-items-center border rounded w-100">
        <NavSearch></NavSearch>
        <NavOrder></NavOrder>
        <FormAdd></FormAdd>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default App;
