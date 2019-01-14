import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Layout from "../../../components/layout";
import web3 from "../../../ether/web3";
import camp_abt from "../../../ether/build/campaign.json";
import Req_row from "../../../components/requestrow";

class Request extends Component {
  static async getInitialProps(props) {
    //const address = props.query.address;
    const camp = await new web3.eth.Contract(
      JSON.parse(camp_abt.interface),
      props.query.address
    );
    const approver_count = await camp.methods.total_contribution().call();
    const tot_req = await camp.methods.getreqlen().call();
    console.log("number of request present is ", tot_req);

    const requests = await Promise.all(
      Array(parseInt(tot_req))
        .fill()
        .map((element, index) => {
          return camp.methods.reqarray(index).call();
        })
    );
    console.log("retrived reuests are", requests);
    return { approver_count, requests, address: props.query.address, tot_req };
  }

  renderrow() {
    console.log("inside render rwo function");
    return this.props.requests.map((request, index) => {
      return (
        <Req_row
          request={request}
          key={index}
          id={index}
          approval={this.props.approver_count}
          address={this.props.address}
        />
      );
    });
  }
  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Open Request</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add request </Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipieant</HeaderCell>
              <HeaderCell>Approval count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderrow()}</Body>
        </Table>
      </Layout>
    );
  }
}

export default Request;
