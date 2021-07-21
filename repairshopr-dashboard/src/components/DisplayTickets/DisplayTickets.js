import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Ticket from './Ticket/Ticket';

import { Paper } from '@material-ui/core';

function DisplayTickets() {
    useEffect(() => {
        axios.defaults.baseURL = 'https://microchipsds.repairshopr.com/api/v1';
        axios.defaults.headers = { 
            Authorization: process.env.REACT_APP_API_TOKEN,
            accept: 'application/json',
        };

        console.log(axios.defaults.headers)

        axios.get('/tickets', {
            params: {
                status: 'Not Closed'
            }, 
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    })   

    return (
        <div>
            <Paper className='display-tickets'>
                <Ticket />
            </Paper>
        </div>
    )
}

export default DisplayTickets
