import React, {Component} from "react"
import Header from "../components/Header"

export default class Toc extends Component {
  render() {
    return (
      <nav className="Sidebar">
        <Header />
        <ul>
          <li data-ref="intro">Introduction</li>
          <li data-ref="auth">Authentication</li>
          <li data-ref="api-strain">Cannabis Strain API</li>
          <li data-ref="api-labtest">Cannabis Lab Test API</li>
          <li data-ref="api-shops">Cannabis Shops API</li>
          <li data-ref="api-products">Cannabis Products API</li>
          <li data-ref="api-brands">Cannabis Brands API</li>
          <li data-ref="api-patients">Cannabis Patients API</li>
          <li data-ref="api-approval">Kushy Approval API</li>
        </ul>
        <a href="#" className="button Header_dev">Developer Portal</a>
      </nav>
    );
  }
}
