import React, { Component } from "react";
import { Card, Button, Image, Header, Segment, Grid } from "semantic-ui-react";
import Layout from "../../components/layout";
import Donate from "../../components/donate";
import web3 from "../../ether/web3";
import camp_abt from "../../ether/build/campaign.json";
import { Link } from "../../routes";
//import Donate_req from "../../components/donate";
//import Donate from "../../components/donate";

const src =
  "http://www.pngonly.com/wp-content/uploads/2017/06/Technology-PNG.png";

export default class Campaign_indiv extends Component {
  state = {};
  static async getInitialProps(props) {
    // const address = new web3.eth.getAccounts();
    const camp = await new web3.eth.Contract(
      JSON.parse(camp_abt.interface),
      props.query.address
    );
    const camp_prop = await camp.methods.getsummary().call();
    console.log("description is  ", camp_prop);
    //total_contribution,this.balance,reqarray.length,desc,manager
    return {
      address: props.query.address,
      tot: camp_prop[0],
      balance: camp_prop[1],
      num_request: camp_prop[2],
      manager: camp_prop[4],
      desc: camp_prop[3]
    };
  }
  rener_Cards() {
    {
      const items = [
        {
          header: this.props.manager,
          description:
            "The manager created this campaign and can create request to withdraw the money for the campaign.",
          meta: "Campaign creator address",
          style: { overflowWrap: "break-word" },
          color: "red"
        },
        {
          header: web3.utils.fromWei(this.props.balance, "ether"),
          description:
            "Total contribution so far in terms of ether for this campaign by other Donors",
          meta: "Value in Ether",
          color: "red"
        },
        {
          header: this.props.tot,
          description:
            "The total number of individual contributors for this campiagn so Far.",
          meta: "Total individual contributors",
          color: "red"
        },

        {
          header: this.props.num_request,
          description:
            "The total number of open request for this campaign requested by the Campagin creator.",
          meta: "Total number of open request",
          color: "red"
        }
      ];

      return <Card.Group items={items} />;
    }
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>{this.props.desc}</h3>
          <Segment raised size="huge">
            <p>This is a basic description about the campaign</p>
          </Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>{this.rener_Cards()}</Grid.Column>
              <Grid.Column width={6}>
                <Donate address={this.props.address} />
              </Grid.Column>
            </Grid.Row>
            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary>View request</Button>
              </a>
            </Link>
            <Grid.Row />
          </Grid>
        </div>
      </Layout>
    );
  }
}
