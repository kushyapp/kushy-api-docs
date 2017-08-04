import React, {Component} from "react"

export default class Introduction extends Component {
  render() {
    return (
      <section id="intro" data-section="intro">
        <h1>Introduction</h1>
        <p>Welcome to the Kushy API! You can use our API to access Kushy API endpoints, which can get information on various cannabis strains, products, shops, and brands in our database.</p>
        <p>We have language bindings in Javascript and PHP! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right. Find example apps and more on our Github.</p>
      </section>
    );
  }
}
