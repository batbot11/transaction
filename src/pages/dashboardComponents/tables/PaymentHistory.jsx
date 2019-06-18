import React from "react";
import {Container, Segment} from "semantic-ui-react";
import ReactTable from 'react-table';


class PaymentHistory extends React.Component {
    render () {
        const columns = [
            {
                Header: "Recipent",
                accessor: "recipient"
            },
            {
                Header: "Payment",
                accessor: "payment"
            },
            {
                Header: "Date",
                accessor: "date"
            }
        ]
        return(
            <Container>
            <Segment>
                <ReactTable columns={columns} />
            </Segment>
        </Container>
        )
    }
}

export default PaymentHistory;