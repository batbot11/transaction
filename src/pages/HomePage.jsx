import React from "react";
import {Link} from "react-router-dom";
import {Button} from "semantic-ui-react";




const HomePage = (props) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <div className="content">Payments</div>
          </h1>
          <h2>Login or Signup to get started</h2>
          <div className="ui huge white inverted button" onClick={() => props.history.push("/login")}>
            Login
            <i className="right arrow icon" />
          </div>
          <div className="ui huge white inverted button" onClick={() => props.history.push("/signup")}>
            Signup
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        
      </div>
    </div>
  );
};

export default HomePage;

    // <div>
    //     <Button primary as={Link} to = "/login" >Login</Button>
    //     <Button primary as={Link} to="/signup" >Signup</Button>
    // </div>

