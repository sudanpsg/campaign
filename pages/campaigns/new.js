import React, { Component } from "react";
import Layout from "../../components/layout";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
import { myfact } from "../../ether/factory";
import web3 from "../../ether/web3";
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
    desc: ""
  };

  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log("ok accounts", accounts);

    await myfact.methods
      .createcamp(this.state.mincontribution, this.state.desc)
      .send({ from: accounts[0] });
  };
  render() {
    return (
      <Layout>
        <h3>Create campaign smart contract</h3>
        <Form onSubmit={this.onSubmit}>
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
        </Form>
      </Layout>
    );
  }
}

export default myclass;
