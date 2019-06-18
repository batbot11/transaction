import React from "react";
import {Form, Segment, Button} from "semantic-ui-react";
import PinInput from "react-pin-input";

class AccountForm extends React.Component {

    state = {
        data: {
            pin: ""
        }
    }

    change = (value) => this.setState({data: {...this.state.data, pin: value}})

    submit = () => (
        console.log(this.state.data)
    )

    render () {
        return (
           <Segment compact className="pin" >
               <Form onSubmit = {this.submit} >
                   <Form.Field>
                       <label>Create your Pin:</label>
                       <PinInput 
                        length={4} 
                        initialValue= {this.state.data.pin}
                        secret 
                        onChange={(value, index) => {this.change(value)}} 
                        type="numeric" 
                        style={{padding: '10px'}}  
                        inputStyle={{borderColor: 'black'}}
                        inputFocusStyle={{borderColor: 'blue'}}
                        />
                        <Button primary >Submit</Button>
                   </Form.Field>
               </Form>
           </Segment>
        )
    }
}

export default AccountForm;