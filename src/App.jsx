import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";

const App = () => (
    <div>
    <Route path="/" exact component = {HomePage} />
    <Route path="/login" exact component = {LoginPage} />
    <Route path="/signup" exact component = {SignupPage} />
    <Route path = "/dashboard" component = {Dashboard} />
    </div>
)

export default App;