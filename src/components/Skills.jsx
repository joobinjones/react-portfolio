import React, { Component } from "react";
import LeftSkills from "./LeftSkills";
import RightSkills from "./RightSkills";

export default class Skills extends Component {
  render() {
    return (
      <>
        <h5 className="skills-header mb-3">$ git checkout my-skills</h5>
        <div className="row skills-container">
          <LeftSkills />
          <RightSkills />
        </div>
      </>
    );
  }
}
