import React from 'react';
import Ticket from './Ticket/Ticket';

import { Paper } from '@material-ui/core';

function DisplayTickets() {
    return (
        <div>
            <Paper className='display-tickets'>
                <Ticket />
            </Paper>
        </div>
    )
}

export default DisplayTickets
