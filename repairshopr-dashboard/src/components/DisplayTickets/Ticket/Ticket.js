import React from "react";
import { Card, Typography } from "@material-ui/core";

function Ticket(props) {
    return (
        <Card className="ticket">
            <Typography variant="h4">{props.ticketData.number}</Typography>
            <Typography variant="subtitle1">
                {props.ticketData.customer_business_then_name}
            </Typography>
        </Card>
    );
}

export default Ticket;
