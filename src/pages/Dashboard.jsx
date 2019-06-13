import React from "react";
import {Grid, Menu} from "semantic-ui-react";
import CreateAccount from "./dashboardComponents/CreateAccount";
import SendPayment from "./dashboardComponents/SendPayment";
import MyTransactions from "./dashboardComponents/MyTransactions";
import History from "./dashboardComponents/History";
import Balance from "./dashboardComponents/Balance";
import AccountDetails from "./dashboardComponents/AccountDetails";

class Dashboard extends React.Component {

    state = {
        activeItem: "createAccount"
    }

    handleItemClick = (event, {name}) => {
        this.setState({activeItem: name})
    }

    render () {
        const {activeItem} = this.state;
        return (
            <Grid>
                <Grid.Column width={4}>
                <Menu fluid vertical tabular  >
                    <Menu.Item name="createAccount" active = {activeItem === "createAccount"} onClick = {this.handleItemClick} >Create Account</Menu.Item>
                    <Menu.Item name="sendPayment" active = {activeItem === "sendPayment"} onClick = {this.handleItemClick} >Send Payment</Menu.Item>
                    <Menu.Item name="myTransactions" active = {activeItem === "myTransactions"} onClick = {this.handleItemClick} >My Transactions</Menu.Item>
                    <Menu.Item name="history" active = {activeItem === "history"} onClick = {this.handleItemClick} >History</Menu.Item>
                    <Menu.Item name="accountDetails" active = {activeItem === "accountDetails"} onClick = {this.handleItemClick} >My Account Details</Menu.Item>
                    <Menu.Item name="balance" active = {activeItem === "balance"} onClick = {this.handleItemClick} >Balance</Menu.Item>
                </Menu>
                </Grid.Column>
                <Grid.Column width={12} stretched >
                {activeItem === "createAccount" && <CreateAccount/> }
                {activeItem === "sendPayment" && <SendPayment/> }
                {activeItem === "myTransactions" && <MyTransactions/> }
                {activeItem === "history" && <History/> }
                {activeItem === "accountDetails" && <AccountDetails/> }
                {activeItem === "balance" && <Balance/> }
                </Grid.Column>
            </Grid>
        )
    }
}

export default Dashboard;