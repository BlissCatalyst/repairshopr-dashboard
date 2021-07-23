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
            console.log(result.data.tickets)
            setTickets(result.data.tickets);
            console.log(tickets);
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
        console.log('ticketLoop running!')
            tickets.map(ticket => (
                <Ticket key={ticket.number} ticketData={ticket}/>
            ))
        
    }

    return (
        <div>
            <Paper className='display-tickets'>
                {ticketLoop()}
            </Paper>
        </div>
    )
}

export default DisplayTickets
