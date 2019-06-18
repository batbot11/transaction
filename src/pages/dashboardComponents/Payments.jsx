import React from "react";
import {Button} from "semantic-ui-react";
import PaymentHistory from "./tables/PaymentHistory";
import SendPayment from "./forms/SendPayment";

class Payments extends React.Component {

    state = {
        toOpen: ""
    }

    buttonClicked = (event) => {
        this.setState({toOpen: event.target.name})
    }

    render () {
        const {toOpen} = this.state;
        return (
            <div>
            <h1>Payments</h1>
            <Button.Group>
            <Button name="paymentHistory" onClick={this.buttonClicked} >Payment History</Button>
            <Button.Or />
            <Button positive name="sendPayment" onClick={this.buttonClicked} >Send Payment</Button>
            </Button.Group>
            {toOpen === "paymentHistory" && <PaymentHistory/>}
            {toOpen === "sendPayment" && <SendPayment/> }
           </div>
        )
    }
}

export default Payments;