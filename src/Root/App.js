import React from "react";
import "./App.css";
import Navigation from "../Layouts/Navigation";
import Main from "../Layouts/Main";
import { Router } from "react-router-dom";
import history from "../Helpers/history";

class App extends React.Component {
  state = {
    token: "",
    role: "",
    isLogged: null,
    reRender: true,
    handle: () => this.handleSetState()
  };

  handleSetState = p => {
    this.setState(prevState => ({
      reRender: !prevState.reRender
    }));
  };

  componentDidMount() {
    const isLogged =
      sessionStorage.getItem("isLogged") ?? sessionStorage.getItem("isLogged");
    const role = sessionStorage.getItem("role");
    this.setState({
      isLogged: isLogged,
      role: role
    });
  }

  componentDidUpdate() {
    const isLogged = sessionStorage.getItem("isLogged");
    const role = sessionStorage.getItem("role");
    if (this.state.isLogged !== isLogged) {
      this.setState({
        isLogged: isLogged,
        role: role
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Navigation state={this.state} />
          <Main state={this.state} />
        </Router>
      </div>
    );
  }
}

export default App;
