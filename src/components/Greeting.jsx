import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1 col-md-3"> </div>
        <div className="col-10 col-md-6">
          <h3 className="mt-3" id="home-greeting" align="center">
            Greetings from the Code Offices of Austin Henry Jones!
            <br />
          </h3>
        </div>
        <div className="col-1 col-md-3"> </div>
      </div>
    );
  }
}
