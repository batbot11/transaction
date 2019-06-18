import React from "react";
import {Menu, Segment, Form, Button, Icon, Grid, Input} from "semantic-ui-react";
import {Link} from "react-router-dom";

class LoginPage extends React.Component {

    state = {
        activeItem: "user",
        data: {
            username: "",
            password: ""
        },
        showPassword: false
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

    showPassword = () => this.setState({showPassword: !this.state.showPassword});

    render () {
        const {data, activeItem, showPassword} = this.state;
       
        const h1Styles = {
            marginLeft: "46vw",
            marginTop: "5vh"
        }

        const segmentStyles = {
            marginTop: "10vh"
        }

        return (
            <div>
                <h1 style={h1Styles}>Login</h1>
                <Grid>
                    <Grid.Column width="5" ></Grid.Column>
                    <Grid.Column width="6" >
                        <Segment clearing raised style={segmentStyles} >
                      <Menu widths={2} pointing secondary >
                          <Menu.Item name="user" active={activeItem === "user"} onClick={this.handleClick} >For User</Menu.Item>
                          <Menu.Item name="admin" active={activeItem === "admin"} onClick={this.handleClick} >For Admin</Menu.Item>
                      </Menu>
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
                                <label >Password:</label>
                                <Input type= {showPassword ? "text" : "password"} 
                                placeholder="Enter Password"
                                 icon={<Icon className='eye icon' link 
                                 onClick={this.showPassword}/>}
                                 name = "password"
                                value = {data.password}
                                onChange = {this.change}
                                 />
                                </Form.Field>
                                <Button floated="right" primary style={{marginTop: "10px"}} >Login</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width="3" ></Grid.Column>
                </Grid>  
            </div>       
        )
    }
}

export default LoginPage;