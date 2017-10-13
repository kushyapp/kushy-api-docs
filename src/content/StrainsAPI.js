import React, {Component} from "react"
import Highlight from "react-highlight"

export default class StrainsAPI extends Component {
  render() {
    return (
      <section id="strains" data-section="strains">
        <h1>Strains</h1>
        <section id="strains-all" data-section="strains-all">
          <h2>Get All Strains</h2>
          <div className="codeSnippet">
            <Highlight className="highlight javascript">
              var api = 'http://api.kushy.net/api/1.1/tables/strains/rows'; <br />
              var xmlhttp; <br />
              xmlhttp = new XMLHttpRequest(); <br />
              xmlhttp.onreadystatechange = function(){'{'} <br />
              <span className="indent"></span>if (xmlhttp.readyState == 4 && xmlhttp.status == 200){'{'} <br />
              <span className="indent-2"></span>strains = JSON.parse(this.responseText); <br />
              <span className="indent-2"></span>console.log(strains); <br />
              <span className="indent"></span>{'}'} <br />
              {'}'} <br />
              xmlhttp.open("GET", api, true); <br />
              xmlhttp.send();
            </Highlight>

            <Highlight className="highlight javascript">
              // The above command returns JSON structured like this:
            </Highlight>

            <Highlight className="highlight json">
              [ <br />
              <span className="indent"></span>meta: {'{'} <br />
              <span className="indent-2"></span>table: "strains",<br />
              <span className="indent-2"></span>type: "collection",<br />
              <span className="indent-2"></span>total: 20,<br />
              <span className="indent-2"></span>total_entries: 0<br />
              <span className="indent"></span>{'}'},<br />
              <span className="indent"></span>data: [<br />
              <span className="indent-2"></span>{'{'}<br />
              <span className="indent-3"></span>id: 1,<br />
              <span className="indent-3"></span>status: 1,<br />
              <span className="indent-3"></span>sort: 0,<br />
              <span className="indent-3"></span>name: "100 OG",<br />
              <span className="indent-3"></span>slug: null,<br />
              <span className="indent-3"></span>image: "http://fadedfools.com/medical_marijuana/100dollar_og_kush.jpg",<br />
              <span className="indent-3"></span>description: "This strain is named after it's high price in it's Hollywood home. As a 50/50 hybrid of indica and sativa, $100 OG does a great job offering pain relief with an alert, cerebral high.",<br />
              <span className="indent-3"></span>type: "Hybrid",<br />
              <span className="indent-3"></span>crosses: "",<br />
              <span className="indent-3"></span>breeder: "Old School Breeder's Association",<br />
              <span className="indent-3"></span>effects: "Focused",<br />
              <span className="indent-3"></span>ailment: "Depression",<br />
              <span className="indent-3"></span>flavor: "Citrus",<br />
              <span className="indent-3"></span>location: null,<br />
              <span className="indent-3"></span>terpenes: "Limonene",<br />
              <span className="indent-3"></span>thc: 127,<br />
              <span className="indent-3"></span>thca: 0,<br />
              <span className="indent-3"></span>thcv: 0,<br />
              <span className="indent-3"></span>cbd: 16,<br />
              <span className="indent-3"></span>cbda: 0,<br />
              <span className="indent-3"></span>cbdv: 0,<br />
              <span className="indent-3"></span>cbn: 10,<br />
              <span className="indent-3"></span>cbg: 0,<br />
              <span className="indent-3"></span>cbgm: 0,<br />
              <span className="indent-3"></span>cbgv: 0,<br />
              <span className="indent-3"></span>cbc: 0,<br />
              <span className="indent-3"></span>cbcv: 0,<br />
              <span className="indent-3"></span>cbv: 0,<br />
              <span className="indent-3"></span>cbe: 0,<br />
              <span className="indent-3"></span>cbt: 0,<br />
              <span className="indent-3"></span>cbl: 0<br />
              <span className="indent-2"></span>{'}'}]<br />
              <span className="indent"></span>{'}'}<br />
              {'}'}
            </Highlight>
          </div>
          <p>Kushy allows for GET requests from any public request, just request your data and go!</p>
          <p>As a verified developer you'll gain access to API keys to allow POST, PUT, and DELETE requests. You can register a new Kushy API key at our developer portal.</p>
          <aside class="notice">
            Looking for our data? Please don't scrape us - <a href="http://github.com/kushyapp">download our database on Github</a>
          </aside>
        </section>
        <section id="strains-all" data-section="strains-all">
          <h2>Get Single Strain</h2>
          <div className="codeSnippet">
            <Highlight className="highlight php">
              {'<?'}php <br />
                <span className="indent"></span>$api = 'http://api.kushy.net/api/1.1/tables/strains/rows';<br />
                <span className="indent"></span>$curl = curl_init();<br />
                <br />
                <span className="indent"></span>curl_setopt_array($curl, array(<br />
                  <span className="indent-2"></span>CURLOPT_URL => $api,<br />
                  <span className="indent-2"></span>CURLOPT_RETURNTRANSFER => true,<br />
                  <span className="indent-2"></span>CURLOPT_TIMEOUT => 30,<br />
                  <span className="indent-2"></span>CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,<br />
                  <span className="indent-2"></span>CURLOPT_CUSTOMREQUEST => "GET",<br />
                  <span className="indent-2"></span>CURLOPT_HTTPHEADER => array(<br />
                    <span className="indent-3"></span>"cache-control: no-cache"<br />
                  <span className="indent-2"></span>),<br />
                <span className="indent"></span>));<br />
                <br />
                <span className="indent"></span>$response = curl_exec($curl);<br />
                <span className="indent"></span>$err = curl_error($curl);<br />
                <br />
                <span className="indent"></span>curl_close($curl);<br />
                <span className="indent"></span>$response = json_decode($response, true);<br />
                <span className="indent"></span>echo 'Strain Name'. $response['data'][0]['name'];<br />
              ?>
            </Highlight>
          </div>
          <p>Kushy allows for GET requests from any public request, just request your data and go!</p>
          <p>As a verified developer you'll gain access to API keys to allow POST, PUT, and DELETE requests. You can register a new Kushy API key at our developer portal.</p>
          <aside class="notice">
            Looking for our data? Please don't scrape us - <a href="http://github.com/kushyapp">download our database on Github</a>
          </aside>
      </section>
  </section>
    );
  }
}
