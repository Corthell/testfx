import React from "react";
import history from "../Helpers/history";

import "./Style.css";

class Login extends React.Component {
  state = {
    user: "",
    password: "",
    error: null
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.handleAutentication(this.state.password)) {
      history.push("/");
      this.props.state.handle();
    }
  };

  handleAutentication = password => {
    switch (password) {
      case "admin":
        sessionStorage.setItem("role", "admin");
        sessionStorage.setItem("isLogged", true);
        return true;
      case "user":
        sessionStorage.setItem("role", "user");
        sessionStorage.setItem("isLogged", true);
        return true;

      default:
        this.setState({
          error: "Invalid credentials"
        });
        return false;
    }
  };

  render() {
    return (
      <>
        <p className="login">LOGOWANIE</p>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">Login:</label>
          <br />
          <input
            type="text"
            id="fname"
            name="user"
            value={this.state.user}
            onChange={this.handleChange}
            required
          />
          <br />
          <label htmlFor="lname">Password:</label>
          <br />
          <input
            type="password"
            id="lname"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br />
          <br />
          <span className="error">{this.state.error ?? this.state.error}</span>
          <br />
          <br />
          <input className="button" type="submit" value="Login" />
        </form>
        <br />
        <br />
        <br />
        <p className="message">Dane do logowania</p>
        <br />
        <p className="message">
          <strong>user/user i admin/admin</strong>
        </p>
        <br />
        <div className="message-container">
          <p className="message">
            Gdy nie jest sie zalogowanym userem to widać strone statyczna (all
            dane na sztywno wpisane w html).Po zalogowaniu na usera wyświetla
            się zawartość dla userów zalogowanych, na admin - pojawia się button
            -Admin.
          </p>
          <p className="message">
            Podstrony dla zalogowanych są chronione przed wpisaniem url
            podstrony
          </p>
          <p className="message">
            Możesz z kodu all sie dowiedzieć ale tak w skrócie jak to działa...
          </p>
          <br />
          <p className="message">
            Po starcie strony, rootowy komponent App sprawdza czy są dane w
            localStorage - jak nie to stan w App się nie zminia i na jego
            podstawie (jest on przekazywany w dół do komponentów - pojawiajają
            się widoki - w tym przypadku - dla niezalogowanego.
          </p>
          <p className="message">
            Po zalogowaniu, "sprawdzany jest... :)" user i jego rola. Na tej
            podstawie w handleOnSubmit, fake'owo ustawiany jest sessionStorage w
            dane (token, role, isLogged) a następnie odpalana jest funkcja
            przekazana z App do Login która powoduje zmiane stanu a tym samym
            przeładowanie komponentów. DO przekierowania użyłem propsa history,
            dostarczanego z react router. Tam podaje się gdzie ma nastapić
            przekierowanie i baaam ;]
          </p>
          <p className="message">
            Gdy App sie updatuje to odpalana jest componentDidMount() i tam
            sprawdza sessionStorage czy są tam odpowiednie dane. Jak są, to
            ładowane są one do state App a on przekazywany jest do innych
            komponentów: Navigation(kontener dla 2 wersji navBara) i Main
            (kontener dla wersji statycznej dla niezalogowanych i dynamicznej
            dla zalogowanych). Dzięki odpowiednim danym renderują się warunkowo
            w zależności od danych w state. Co ważne - wszytko ładnie działa
            także po odświerzeniu strony. To tak w skrócie :)
          </p>
        </div>
      </>
    );
  }
}

export default Login;
