import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";
export default () => {
  return (
    <Menu style={{ marginTop: "10px" }} color="orange">
      <Link route="/">
        <a className="item">Crowd Campaign</a>
      </Link>
      <Menu.Menu position="right">
        <Menu.Item>Campaigns</Menu.Item>

        <Link route="/campaigns/new">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
