import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Ticket from './Ticket/Ticket';

import { Paper } from '@material-ui/core';

function DisplayTickets() {
    let [tickets, setTickets] =  useState([]);
    
    useEffect(() => {
        axios.defaults.baseURL = 'https://microchipsds.repairshopr.com/api/v1';
        axios.defaults.headers = { 
            Authorization: process.env.REACT_APP_API_TOKEN,
            accept: 'application/json',
        };

        const getData = async () => {
            const result = await axios.get('/tickets', { params: { status: 'Not Closed' } })
            setTickets(result.data.tickets);
        };

        getData();

        // axios.get('/tickets', {
        //     params: {
        //         status: 'Not Closed'
        //     }, 
        // })
        // .then(res => {
        //     console.log(res)
        //     setTickets(res.data.tickets)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
    }, [])   

    function ticketLoop() {
            return (tickets.map(ticket => (
                <Ticket key={ticket.number} ticketData={ticket}/>
            )))
        
    }

    return (
        <>
            <Paper className='display-tickets'>
                {ticketLoop()}
            </Paper>
        </>
    )
}

export default DisplayTickets
