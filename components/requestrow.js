import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ether/web3";
import camp_abt from "../ether/build/campaign.json";

class Req_row extends Component {
  OnApprove = async () => {
    const account = await web3.eth.getAccounts();
    const camp = new web3.eth.Contract(
      JSON.parse(camp_abt.interface),
      this.props.address
    );
    await camp.methods.approve(this.props.id).send({ from: account[0] });
  };
  Onfinalize = async () => {
    const account = await web3.eth.getAccounts();
    const camp = new web3.eth.Contract(
      JSON.parse(camp_abt.interface),
      this.props.address
    );
    await camp.methods.finalizereq(this.props.id).send({ from: account[0] });
  };
  render() {
    const { Row, Cell } = Table;
    console.log("inside dummy bababdasd");
    return (
      <Row>
        <Cell>{this.props.id + 1}</Cell>
        <Cell>{this.props.request.description}</Cell>
        <Cell>{web3.utils.fromWei(this.props.request.value, "ether")}</Cell>
        <Cell>{this.props.request.reciver}</Cell>
        <Cell>
          {this.props.request.totapproved}/{this.props.approval}
        </Cell>
        <Cell>
          <Button color="green" basic onClick={this.OnApprove}>
            Approve
          </Button>
        </Cell>
        <Cell>
          <Button color="red" basic onClick={this.Onfinalize}>
            Finalize
          </Button>
        </Cell>
      </Row>
    );
  }
}
export default Req_row;
