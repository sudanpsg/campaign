import React, { Component } from "react";
import { Form, Input, Button, Dimmer, Loader, Header } from "semantic-ui-react";
//import { myfact } from "../../ether/factory";
//import web3 from "../../ether/web3";
import web3 from "../ether/web3";
import { Message } from "semantic-ui-react";
import camp_abt from "../ether/build/campaign.json";
import { Router } from "../routes";
//import { Link, Router } from "../../routes";

class Donate extends Component {
  state = {
    contribution: "",
    desc: "",
    errormsg: "",
    loading: false,
    sucess: true
  };

  onSubmit = async event => {
    event.preventDefault();
    const address = await web3.eth.getAccounts();
    const camp = await new web3.eth.Contract(
      JSON.parse(camp_abt.interface),
      this.props.address
    );
    this.setState({ loading: true, errormsg: "" });

    try {
      await camp.methods.contribute().send({
        from: address[0],
        value: web3.utils.toWei(this.state.contribution, "ether")
      });
      Router.replaceRoute(` /campaigns/${this.props.address}`);
      this.setState({ loading: false, sucess: false });
      console.log("address frpm donate is ", address[0]);
      console.log("the value of ether is ", this.state.contribution);
    } catch (err) {
      this.setState({ errormsg: err.message, loading: false });

      console.log("the error message is ", err.message);
      console.log("full error is ", err);
    }

    this.setState({ loading: false, value: "" });
  };
  render() {
    //const { active } = true;
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errormsg}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="Ether"
            labelPosition="right"
            value={this.state.contribution}
            onChange={event =>
              this.setState({ contribution: event.target.value })
            }
          />
        </Form.Field>

        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Contribute!!"
          primary
        />
        <Dimmer active={this.state.loading} page>
          <Loader />
          <Header as="h2" icon inverted>
            <p>Processing Transaction</p>
          </Header>
        </Dimmer>
        <Message
          error
          header="Oops Something went wrong.Please re try"
          content={this.state.errormsg}
        />
        <Message positive hidden={this.state.sucess}>
          <Message.Header>
            You have sucessfully contributed : {this.state.contribution} Ether
          </Message.Header>
        </Message>
      </Form>
    );
  }
}

export default Donate;
