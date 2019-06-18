import React from "react";
import {Button, Icon} from "semantic-ui-react";
import AccountForm from "./AccountForm";

class CreateAccount extends React.Component {

    state = {
        showAccountForm: false
    }

    render () {
        const {showAccountForm} = this.state;
        return (
            <div>
                 <Button icon labelPosition="right" onClick = {this.click} style={{marginTop: "10px"}} >Create Account
                 <Icon className="add user"/>
                 </Button>
                 {showAccountForm && <AccountForm/>}
            </div>
        )
    }
};

export default CreateAccount;