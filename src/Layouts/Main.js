import React from "react";
import "./Main.css";
import { Route } from "react-router-dom";
import Home from "../View/Home";
import Articles from "../View/Articles";
import Login from "../View/Login";
import Profile from "../View/Profile";
import Wallet from "../View/Wallet";
import Community from "../View/Community";
import Admin from "../View/Admin";

const Main = ({ state }) => {
  return (
    <div className="main__wrapper">
      <Route exact path="/">
        {state.isLogged ? <Articles /> : <Home />}
      </Route>
      <Route exact path="/articles">
        {state.isLogged ? <Articles /> : <Login state={state} />}
      </Route>
      <Route exact path="/profile">
        {state.isLogged ? <Profile /> : <Login state={state} />}
      </Route>
      <Route exact path="/wallet">
        {state.isLogged ? <Wallet /> : <Login state={state} />}
      </Route>
      <Route exact path="/community">
        {state.isLogged ? <Community /> : <Login state={state} />}
      </Route>
      <Route exact path="/admin">
        {state.isLogged ? <Admin /> : <Login state={state} />}
      </Route>
      <Route exact path="/login">
        <Login state={state} />
      </Route>
    </div>
  );
};

export default Main;
