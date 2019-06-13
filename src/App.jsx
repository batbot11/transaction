import React from "react";
import {Route} from "react-router-dom";
import {Container} from "semantic-ui-react";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";


const App = () => (
  <Container>
    <Route path="/" exact component = {HomePage} />
    <Route path="/login" exact component = {LoginPage} />
    <Route path="/signup" exact component = {SignupPage} />
    <Route path = "/dashboard" component = {Dashboard} />
  </Container>
)

export default App;