import React from 'react';
import { useEffect } from 'react';

import axiosWithAuth from '../axiosAuth';
import Ticket from './Ticket/Ticket';

import { Paper } from '@material-ui/core';

function DisplayTickets() {
    useEffect(() => {
        console.log(axiosWithAuth())
        axiosWithAuth.get('/tickets', {
            params: {
                status: 'Not Closed'
            }
        }).then(function (res) {
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })
    });    

    return (
        <div>
            <Paper className='display-tickets'>
                <Ticket />
            </Paper>
        </div>
    )
}

export default DisplayTickets
