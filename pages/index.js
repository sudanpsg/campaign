import React, { Component } from "react";
import { myfact } from "../ether/factory";
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
    let camp_obj = [];

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
      //console.log("inside the forloop ", camparr);
      camp_obj.push({
        desc: await camparr.methods.desc().call(),
        value: await camparr.methods.minamnt().call()
      });
    }
    console.log("my camp object is ", camp_obj);
    //console.log("the value is ", val);
    // const vals = await camps[0].methods.minamnt().call();

    //   const camps = new web3.eth.Contract(JSON.parse(campcompile.interface), address);
    //  const campaign_det = camp_arr.then(async contr => {
    //   const tot_contrib = await contr.methods.total_contribution().call();
    //  console.log("inside then main contract", tot_contrib);
    // });
    // campaign_det;
    return { campaigns, camp_obj };
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
      const pk = this.props.campaigns[i];
      items.push({
        image: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
        extra: (
          <div>Minimum contribution : {this.props.camp_obj[i].value} </div>
        ),
        color: "orange",
        href: "#card-example-link-card",
        header: this.props.camp_obj[i].desc,
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
          <h3>Open Campaigns</h3>
          {this.rendercamp()}
          <Button
            floated="right"
            content="Create Campaign"
            icon="add circle"
            primary
          />
        </div>
      </Layout>
    );
  }
}

export default Mycampaign;
