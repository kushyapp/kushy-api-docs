import React, {Component} from "react"
import Highlight from "react-highlight"

export default class Authentication extends Component {
  render() {
    return (
      <section id="auth" data-section="auth">
        <h1>Authentication</h1>
        <div className="codeSnippet">
          <Highlight className="highlight javascript">
              import axios from axios;
          </Highlight>
          <Highlight className="highlight javascript">
            axios.get('http://api.kushy.net/api/1.1/tables/rows')
          </Highlight>
          <Highlight className="highlight javascript">
              .then() {'{'}
          </Highlight>
        </div>
        <p>Kushy allows for GET requests from any public request, just request your data and go!</p>
        <p>As a verified developer you'll gain access to API keys to allow POST, PUT, and DELETE requests. You can register a new Kushy API key at our developer portal.</p>
        <aside class="notice">
          Looking for our data? Please don't scrape us - <a href="http://github.com/kushyapp">download our database on Github</a>
        </aside>
      </section>
    );
  }
}
