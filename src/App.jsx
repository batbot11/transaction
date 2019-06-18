import React from "react";
import {Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AccountDetails from "./pages/dashboardComponents/AccountDetails";
import PaymentHistory from "./pages/dashboardComponents/tables/PaymentHistory";
import SendPayment from "./pages/dashboardComponents/forms/SendPayment";
import History from "./pages/dashboardComponents/History";
import CreateAccount from "./pages/dashboardComponents/accountSection/CreateAccount";

const App = () => (
    <div>
    <Route path="/" exact component = {HomePage} />
    <Route path="/login" exact component = {LoginPage} />
    <Route path="/signup" exact component = {SignupPage} />
    <Route path = "/dashboard" component = {Dashboard} />
    <Route path = "/dashboard/createaccount" component = {CreateAccount} />
    <Route path = "/dashboard/accountdetails" component = {AccountDetails} />
    <Route path = "/dashboard/paymenthistory" component = {PaymentHistory} />
    <Route path = "/dashboard/sendpayment" component = {SendPayment} />
    <Route path = "/dashboard/history" component = {History} />
    </div>
)

export default App;