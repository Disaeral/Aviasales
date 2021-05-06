import React from "react";
import { connect, useDispatch } from "react-redux";
import { uncheck } from "../redux/actions.js";
import Ticket from "./Ticket.js";

const Tickets = ({ tickets, checkboxes }) => {
  const dispatch = useDispatch()
  
  tickets = tickets.slice(0, 5)
  
  return tickets.map((ticket, i) => {
    return <Ticket key={i} ticket={ticket} segments={ticket.segments} />;
  });
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    checkboxes: state.checkboxes.checkboxes
  };
};

export default connect(mapStateToProps, null)(Tickets);
