import React from "react";
import {Segment, Container} from "semantic-ui-react";
import ReactTable from "react-table";


class History extends React.Component {
    render () {
        const columns = [
            {
                Header: "From",
                accessor: "from"
            },
            {
                Header: "To",
                accessor: "to"
            },
            {
                Header: "Amount",
                accessor: "amount"
            },
            {
                Header: "Date",
                accessor: "date"
            },
            {
                Header: "Tx ID",
                accessor: "transactionId"
            },
            {
                Header: "Block Number",
                accessor: "blockNumber"
            }
        ];

       const segmentStyles = {
            marginLeft: "3vw"
        }

        return (
            <Container>
                <h1>History</h1>
            <Segment raised style={segmentStyles} >
            <ReactTable columns={columns} 
            pageSize = "10"
            
            />
            </Segment>
            </Container>
        )
    }
}

export default History;