import React, { Component } from "react";
import {
  Card,
  Button,
  Image,
  Header,
  Segment,
  Grid,
  Form,
  Input,
  Dimmer,
  Loader,
  Message
} from "semantic-ui-react";
import Layout from "../../../components/layout";
import web3 from "../../../ether/web3";
import camp_abt from "../../../ether/build/campaign.json";
import { Link } from "../../../routes";

class New_request extends Component {
  state = {
    total_ether: "",
    desc: "",
    recp: "",
    errormsg: "",
    loading: false,
    sucess: true
  };

  static async getInitialProps(props) {
    //  const address = props.query.address;
    console.log("this address is maybe", props.query.address);
    return { address: props.query.address };
  }
  onSubmit = async event => {
    console.log("the address is ", this.props.address);
    event.preventDefault();
    const camp = await new web3.eth.Contract(
      JSON.parse(camp_abt.interface),
      this.props.address
    );
    this.setState({ loading: true, errormsg: "" });
    try {
      const account = await web3.eth.getAccounts();
      console.log("camps is ", camp.methods.createreq);
      await camp.methods
        .createreq(
          this.state.desc,
          web3.utils.toWei(this.state.total_ether, "ether"),
          this.state.recp
        )
        .send({ from: account[0] });
      this.setState({ loading: false, sucess: false });
      console.log("the state is ", this.state.loading);
      //Router.pushRoute("/");
    } catch (err) {
      console.log("there  main error is", err);
      this.setState({ errormsg: err.message });
      console.log("error message is ", this.state.errormsg);
    }
  };
  render() {
    return (
      <Layout>
        <h1>new request form</h1>

        <Form onSubmit={this.onSubmit} error={!!this.state.errormsg}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.desc}
              onChange={event => this.setState({ desc: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Ether required </label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.total_ether}
              onChange={event =>
                this.setState({ total_ether: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient address </label>
            <Input
              value={this.state.recp}
              onChange={event => this.setState({ recp: event.target.value })}
            />
          </Form.Field>
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Create Request"
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
            <Message.Header>Your requested is created </Message.Header>
          </Message>
        </Form>
      </Layout>
    );
  }
}
export default New_request;
