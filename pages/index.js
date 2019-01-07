import React, { Component } from "react";
import { myfact, camp_arr } from "../ether/factory";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/layout";
import campcompile from "../ether/build/campaign.json";
import web3 from "../ether/web3";
class Mycampaign extends Component {
  static async getInitialProps() {
    console.log("hi guys");
    const campaigns = await myfact.methods.getcamp().call();
    var i = 0;
    let val = [];

    //const camp = new web3.eth.Contract(
    //  JSON.parse(campcompile.interface),
    //  campaigns[0]
    //);
    console.log(campaigns.length);
    for (i = 0; i < campaigns.length; i++) {
      const camparr = await new web3.eth.Contract(
        JSON.parse(campcompile.interface),
        campaigns[i]
      );
      console.log("inside the forloop ", camparr);
      val.push(await camparr.methods.minamnt().call());
    }
    console.log("the value is ", val);
    // const vals = await camps[0].methods.minamnt().call();

    //   const camps = new web3.eth.Contract(JSON.parse(campcompile.interface), address);
    //  const campaign_det = camp_arr.then(async contr => {
    //   const tot_contrib = await contr.methods.total_contribution().call();
    //  console.log("inside then main contract", tot_contrib);
    // });
    // campaign_det;
    return { campaigns, val };
  }
  // async componentDidMount() {
  //  const campaigns = await factory.methods.getcamp().call();
  //}

  getcamps;
  rendercamp() {
    let i = 0;
    var items = [];
    console.log("hi world", this.props.val);
    for (i = 0; i < this.props.campaigns.length; i++) {
      items.push({
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        header: this.props.campaigns[i],
        description: <div>Minimum contribution{this.props.val[i]} </div>,
        fluid: true
      });
    }
    return <Card.Group items={items} itemsPerRow="5" />;
  }
  render() {
    // return <h2>{this.props.campaigns[0]}</h2>;

    return (
      <Layout>
        <div>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
          />
          <h3>Open Campaigns</h3>
          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
          {this.rendercamp()}
          {this.props.tot_contrib}
        </div>
      </Layout>
    );
  }
}

export default Mycampaign;
