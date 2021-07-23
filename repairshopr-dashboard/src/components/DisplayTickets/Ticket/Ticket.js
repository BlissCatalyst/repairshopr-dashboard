import React from 'react'
import { Card, Typography } from '@material-ui/core';

function Ticket(props) {
    console.log(props);
    return (
        
            <Card className="ticket">
                <Typography variant='h4'>
                    Hello world!
                </Typography>
            </Card>
        
    )
}

export default Ticket
