import React from "react"
import Header from "../components/Header"
import Toc from "../components/Toc"

// import pages
import Introduction from "../content/Introduction"
import Authentication from "../content/Authentication"
import StrainsAPI from "../content/StrainsAPI"

//import assets
import "../assets/css/main.css"
import "../assets/css/tomorrow-night.css"

export default () =>
  <div className="app">
    <div className="container">
      <Toc />
      <div className="wrapper">
        <div className="codeScreen"></div>
        <div className="content">
          <Header />
          <Introduction />
          <Authentication />
          <StrainsAPI />
        </div>
      </div>
    </div>
  </div>
