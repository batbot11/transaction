import React from "react";
import {Button, Icon} from "semantic-ui-react";
import AccountForm from "./AccountForm";
import AccountDetails from "../AccountDetails";

class Account extends React.Component {

  

    state = {
        isPriorAccount: true,
        isFormOpen: false
    }

    click = () => this.setState({isFormOpen: !this.state.isFormOpen})

    render () {
        const {isFormOpen, isPriorAccount} = this.state;
        return (
            <div>
            {!isPriorAccount && <div>
             <Button icon labelPosition="right" onClick = {this.click} style={{marginTop: "10px"}} >Create Account
            <Icon className="add user"/>
            </Button>
            {isFormOpen && <AccountForm/>}
            </div>
            }
            {isPriorAccount && <AccountDetails/>}
            </div>    
        )
    }
}

export default Account;