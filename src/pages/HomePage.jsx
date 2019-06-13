import React from "react";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";

const HomePage = () => (
    <div>
        <Button primary as={Link} to = "/login" >Login</Button>
        <Button primary as={Link} to="/signup" >Signup</Button>
    </div>
);

export default HomePage;