import React from "react";
import {Segment, Form, Button} from "semantic-ui-react";

class SignupPage extends React.Component {

    state = {
        data: {
            emailOrName: "",
            password: "",
            number: ""
        }
    }

    change = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    submit = () => {
        console.log(this.state.data)
    }


    render () {
        const {data} = this.state;
        return (
           <Segment style={{marginTop: "10vh"}} compact >
               <Form onSubmit = {this.submit} size="large" >
                   <Form.Field>
                       <label>Email or Name:</label>
                       <input type="text"
                       placeholder = "Enter Email or Name"
                       name = "emailOrName"
                       value = {data.emailOrName}
                       onChange = {this.change}
                       />
                   </Form.Field>
                   <Form.Field>
                       <label>Password:</label>
                       <input type="text"
                       placeholder = "Enter Password"
                       name = "password"
                       value = {data.password}
                       onChange = {this.change}
                       />
                   </Form.Field>
                   <Form.Field>
                       <label>Phone Number:</label>
                       <input type="text"
                       placeholder = "Enter Phone Number"
                       name = "number"
                       value = {data.number}
                       onChange = {this.change}
                       />
                   </Form.Field>
                   <Button primary >Signup</Button>
               </Form>
           </Segment>
        )
    }
}

export default SignupPage;