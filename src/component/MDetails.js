import React, { Component } from "react";
class MDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mname: "",
      mrating: ""
    };
  }
  render() {
    return (
      <div>
        <h1>hello MDetails</h1>
      </div>
    );
  }
}

export default MDetails;
