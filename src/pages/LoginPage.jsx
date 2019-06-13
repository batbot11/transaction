import React from "react";
import {Menu, Segment, Form, Button} from "semantic-ui-react";

class LoginPage extends React.Component {

    state = {
        activeItem: "forUser",
        data: {
            username: "",
            password: ""
        }
    }

    change = (event) => {
        this.setState({
            data: {...this.state.data, [event.target.name]: event.target.value}
        })
    }

    handleClick = (e, {name}) => this.setState({activeItem: name})

    submit = () => {
        console.log(this.state.data)
    }

    render () {
        const {data, activeItem} = this.state;
        return (
            <div>
               <Menu widths={8} >
                   <Menu.Item active={activeItem === "forUser"} onClick = {this.handleClick} name="forUser" >
                    For User
                   </Menu.Item>
                   <Menu.Item active={activeItem === "forAdmin"} onClick = {this.handleClick} name="forAdmin" >
                    For Admin
                   </Menu.Item>
                </Menu> 
                <Segment style={{marginTop: "20vh"}} compact >
                <Form onSubmit = {this.submit} size="large" >
                    <Form.Field>
                        <label >Username:</label>
                        <input type="text"
                        placeholder = "Enter UserName"
                        name = "username"
                        value = {data.username}
                        onChange =  {this.change}
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
                <Button primary style={{marginTop: "10px"}} >Login</Button>
                </Form>
                </Segment>
            </div>
        )
    }
}

export default LoginPage;