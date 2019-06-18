import React from "react";
import {Grid, Segment} from "semantic-ui-react";
import ReactTable from 'react-table';

class AccountDetails extends React.Component {

    state = {
        balance: "₹ 40,000"
    }

    render () {
        const columns = [
            {
                Header: "Address",
                accessor: "address"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "TxHash",
                accessor: "txhash"
            }
        ];

        const tableStyles = {
            marginLeft: "2vw"
        }

        return (
            <Grid>
            <Grid.Column width="12" >
            <h1>Account Details</h1>
            <ReactTable columns={columns} style={tableStyles} defaultPageSize="11"  />
            </Grid.Column>
            <Grid.Column width="4" >
                <Segment raised >
                    <h1 style={{color: "green"}} >Balance:</h1>
                    <h2 style={{color: "green"}} >{this.state.balance}</h2>
                </Segment>
            </Grid.Column>
        </Grid>
        )
    }
} 

export default AccountDetails;