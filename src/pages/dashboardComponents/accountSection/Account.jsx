import React from "react";
import {Redirect} from "react-router-dom";
import {Button, Icon} from "semantic-ui-react";
import AccountForm from "./AccountForm";
import AccountDetails from "../AccountDetails";

class Account extends React.Component {

    // componentDidMount () {
    //     this.state.isPriorAccount ? 
    // }

    state = {
        isPriorAccount: true,
        isFormOpen: false
    }

    click = () => this.setState({isFormOpen: !this.state.isFormOpen})

    render () {
        const {isFormOpen, isPriorAccount} = this.state;
        return (
            <div>
           {this.state.isPriorAccount ? <Redirect to="/dashboard/accountdetails" /> : 
           
           <Redirect to="/dashboard/createaccount" /> }
           
            </div>    
        )
    }
}

export default Account;