import React from "react";
import {Segment, Form, Button, Grid, Input, Icon} from "semantic-ui-react";

class SignupPage extends React.Component {

    state = {
        data: {
            emailOrName: "",
            password: "",
            number: ""
        },
        showPassword: false
    }

    change = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    submit = () => {
        console.log(this.state.data)
    }

    showPassword = () => this.setState({showPassword: !this.state.showPassword})


    render () {
        const {data, showPassword} = this.state;

        const segmentStyles = {
            marginTop: "10vh"
        };

        const h1Styles = {
            marginLeft: "45vw",
            marginTop: "5vh"
        }

        return (
            <div>
            <h1 style={h1Styles} >Sign Up</h1>
            <Grid>
                <Grid.Column width="5" ></Grid.Column>
                <Grid.Column width="6" >
                    <Segment raised clearing style={segmentStyles} >
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
                        <Input placeholder="Enter Password" 
                        type = {showPassword ? "text" : "password"}
                        icon = {<Icon className="eye icon" link 
                        onClick = {this.showPassword}
                        />}
                        name = "password"
                        value = {data.password}
                        onChange = {this.change}
                        />
                      
                       {/* <input type="text"
                       placeholder = "Enter Password"
                       name = "password"
                       value = {data.password}
                       onChange = {this.change}
                       /> */}
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
                   <Button primary floated="right" >Signup</Button>
               </Form> 
               </Segment>
               </Grid.Column>
            </Grid>
            </div>
        )
    }
}

export default SignupPage;