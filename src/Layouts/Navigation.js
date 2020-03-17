import React from "react";
import SecondaryNavBar from "../Components/SecondaryNavBar";
import PrimaryNavBar from "../Components/PrimaryNavBar";

import "./Navigation.css";

const Navigation = ({ state }) => {
  return (
    <div className="navigation__wrapper">
      {state.isLogged ? <PrimaryNavBar state={state} /> : <SecondaryNavBar />}
    </div>
  );
};

export default Navigation;
