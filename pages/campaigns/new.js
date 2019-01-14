import React, { Component } from "react";
import Layout from "../../components/layout";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Dimmer,
  Loader,
  Header
} from "semantic-ui-react";
import { myfact } from "../../ether/factory";
import web3 from "../../ether/web3";
import { Message } from "semantic-ui-react";
import { Link, Router } from "../../routes";
const genderOptions = [
  { key: "a", text: "Technology", value: "male" },
  { key: "b", text: "HelathCare", value: "female" },
  { key: "c", text: "Sports", value: "male" },
  { key: "d", text: "Entertainment", value: "female" },
  { key: "e", text: "Travel", value: "female" }
];

class myclass extends Component {
  state = {
    mincontribution: "",
    desc: "",
    errormsg: "",
    loading: false,
    sucess: true
  };

  handleOpen = () => this.setState({ loading: true });
  handleClose = () => this.setState({ loading: false });

  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log("ok accounts", accounts);
    this.setState({ loading: true, errormsg: "" });
    //  console.log("error message is ", this.state.errormsg);
    try {
      await myfact.methods
        .createcamp(this.state.mincontribution, this.state.desc)
        .send({ from: accounts[0] });
      this.setState({ loading: false, sucess: false });
      console.log("the state is ", this.state.loading);
      Router.pushRoute("/");
    } catch (err) {
      //console.log("there error is", err.essage);
      this.setState({ errormsg: err.message });
      console.log("error message is ", this.state.errormsg);
    }
  };
  render() {
    //const { active } = true;
    return (
      <Layout>
        <h3>Create campaign smart contract</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errormsg}>
          <Form.Field>
            <label>Campaign Description</label>
            <Input
              value={this.state.desc}
              onChange={event => this.setState({ desc: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.mincontribution}
              onChange={event =>
                this.setState({ mincontribution: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{
              children: "Category",
              htmlFor: "form-select-control-gender"
            }}
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Create Campign"
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
            <Message.Header>Your Crowd Funding Campaign Created</Message.Header>
          </Message>
        </Form>
      </Layout>
    );
  }
}

export default myclass;
