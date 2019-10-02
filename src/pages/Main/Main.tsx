import React, { useState } from "react";
import "./main.scss";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import AddUser from "../../components/AddUser/AddUser";
import UserBlock from "../../components/UserBlock/UserBlock";
import { Container } from "reactstrap";

const App: React.FC = () => {
  const [isShowing, setIsShowing] = useState(true);

  const onClickAddUserButton = () => {
    setIsShowing(!isShowing);
  };

  const onClickSaveButton = () => {
    setIsShowing(!isShowing);
    //save user
  };

  const renderForm = () => {
    if (isShowing)
      return (
        <AddUser
          onClickCancel={onClickAddUserButton}
          onClickSave={onClickSaveButton}
        />
      );

    return (
      <div className="d-none">
        <AddUser
          onClickCancel={onClickAddUserButton}
          onClickSave={onClickSaveButton}
        />
      </div>
    );
  };

  return (
    <Container>
      <div className="Main__Container d-flex flex-column justify-content-start align-items-center">
        <Header onClickAddUser={onClickAddUserButton} />
        <div className="d-flex flex-column justify-content-start align-items-center border rounded w-100">
          <SearchBar />
          <OrderBar />

          {renderForm()}

          <UserBlock />
          <UserBlock />
        </div>
      </div>
    </Container>
  );
};

export default App;
