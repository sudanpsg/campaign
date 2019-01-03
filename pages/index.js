import React, { Component } from "react";
import factory from "../ether/factory";

class Mycampaign extends Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getcamp().call();
  }
  render() {
    return <h1>Ok this is my base page</h1>;
  }
}

export default Mycampaign;
