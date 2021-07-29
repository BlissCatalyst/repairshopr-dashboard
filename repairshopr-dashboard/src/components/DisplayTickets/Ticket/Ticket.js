import React from 'react'
import { Card, Typography } from '@material-ui/core';

function Ticket(props) {
    return (
        
            <Card className="ticket">
                <Typography variant='h4'>
                    {props.ticketData.number}
                </Typography>
            </Card>
        
    )
}

export default Ticket
