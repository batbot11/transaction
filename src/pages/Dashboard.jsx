import React from "react";
import {Grid, Menu, Icon} from "semantic-ui-react";
import Account from "./dashboardComponents/accountSection/Account";
import Payments from "./dashboardComponents/Payments";
import History from "./dashboardComponents/History";
import AccountDetails from "./dashboardComponents/AccountDetails";
import Navbar from "./navbar/Navbar";

class Dashboard extends React.Component {

    state = {
        activeItem: "account"
    }

    handleItemClick = (event, {name}) => {
        this.setState({activeItem: name})
    }

    render () {
        const {activeItem} = this.state;
        return (
            <div>
            <Navbar/>
            <Grid>
                <Grid.Column width={3}>
                <Menu fluid vertical tabular>
                    <Menu.Item name="account" active = {activeItem === "account"} onClick = {this.handleItemClick} >Account
                    <Icon name="add user" />
                    </Menu.Item>
                    <Menu.Item name="sendPayment" active = {activeItem === "sendPayment"} onClick = {this.handleItemClick} >Payments
                    <Icon name="money bill alternate outline" />
                    </Menu.Item>
                    <Menu.Item name="history" active = {activeItem === "history"} onClick = {this.handleItemClick} >History
                    <Icon name="history" />
                    </Menu.Item>
                </Menu>
                </Grid.Column>
                <Grid.Column width={12} stretched textAlign="center" style={{marginTop: "10vh"}} >
                {activeItem === "account" && <Account/> }
                {activeItem === "sendPayment" && <Payments/> }
                {activeItem === "history" && <History/> }
                </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default Dashboard;