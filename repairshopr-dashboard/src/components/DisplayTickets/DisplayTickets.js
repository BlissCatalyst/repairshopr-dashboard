import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import Ticket from "./Ticket/Ticket";

import { Paper } from "@material-ui/core";

import microchipsLogo from "./Microchips.logo.svg";

function DisplayTickets() {
    let [tickets, setTickets] = useState([]);
    let [microchipsTickets, setMicrochipsTickets] = useState([]);
    let [madtechTickets, setMadtechTickets] = useState([]);

    useEffect(() => {
        axios.defaults.baseURL = "https://microchipsds.repairshopr.com/api/v1";
        axios.defaults.headers = {
            Authorization: process.env.REACT_APP_API_TOKEN,
            accept: "application/json",
        };

        const getData = async () => {
            const result = await axios.get("/tickets", {
                params: { status: "Not Closed" },
            });
            setTickets(result.data.tickets);
            console.log(result);
        };
        getData();
    }, []);

    // Separate tickets that belong to Microchips and Madtech into their own arrays.
    useEffect(() => {
        const sortTickets = () => {
            let array1 = [];
            let array2 = [];
            if (tickets) {
                tickets.forEach((ticket) => {
                    if (
                        ticket.problem_type === "MadTech" ||
                        ticket.user_id === 138469 /* Al Herrin's user id */
                    ) {
                        array1.push(ticket);
                    } else {
                        array2.push(ticket);
                    }
                });
            }
            setMadtechTickets(array1);
            setMicrochipsTickets(array2);
            console.log(madtechTickets);
            console.log(microchipsTickets);
        };
        sortTickets();
        // eslint-disable-next-line
    }, [tickets]);

    function ticketLoop(tickets) {
        return tickets.map((ticket) => (
            <Ticket key={ticket.number} ticketData={ticket} />
        ));
    }

    return (
        <>
            <Paper square className="logo">
                <img
                    className="microchipsLogo"
                    src={microchipsLogo}
                    alt="Microchips Logo"
                />
            </Paper>
            <div className="display-all-tickets">
                {/* Microchips Display */}
                <Paper variant="outlined" square className="display-tickets">
                    {ticketLoop(microchipsTickets)}
                </Paper>

                {/* Madtech Display */}
                <Paper variant="outlined" square className="display-tickets">
                    {ticketLoop(madtechTickets)}
                </Paper>
            </div>
        </>
    );
}

export default DisplayTickets;
