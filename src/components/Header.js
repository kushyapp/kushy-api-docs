import React, {Component} from "react"
import logo from "../assets/img/kushy-api-logo.png"

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <a href="#" className="Header_logo"><img src={logo} alt="Kushy API" /></a>
      </header>
    );
  }
}
