import React from "react";
import { Menu, Dropdown, Icon, Button } from "semantic-ui-react";

const options = [
    {key: "logout", icon: "sign-out", text: "Logout"}
]

const Navbar = () => (
    <Menu className="navigation" fixed="top" size="massive" >
            <Menu.Item header >
                <h1>Payments</h1>
            </Menu.Item>
            <Menu.Item className="right floated">
        <Dropdown pointing="top right" text="Account">
        <Dropdown.Menu  >
          <Dropdown.Item text="Logout" icon="sign out" />
          <Dropdown.Item text="My Events" icon="calendar" />
          <Dropdown.Item text="My Network" icon="users" />
          <Dropdown.Item text="My Profile" icon="user" />
         </Dropdown.Menu>
        </Dropdown>
         </Menu.Item>
    </Menu>
)

export default Navbar;