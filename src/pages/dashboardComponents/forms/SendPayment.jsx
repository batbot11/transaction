import React from "react";
import {Form, Button, Container, Segment, Icon} from "semantic-ui-react";

class SendPayment extends React.Component {
    render () {
        return (
            <Container>
                <Segment compact raised className="sendPayment" >
                    <Form>
                        <Form.Field>
                            <label>Recipent:</label>
                            <input type="text"
                            placeholder="Enter Recipient Name"
                            />
                        </Form.Field>
                            <label>Amount:</label>
                         <div className="inline icon field">
                            <div className="ui left icon input">
                             <Icon name="rupee sign" />
                             <input placeholder="Enter Amount" type="text"/>
                            </div>
                         </div>
                        <Button primary >Submit</Button>
                    </Form>
                </Segment>
            </Container>
        )
    }
}

export default SendPayment;