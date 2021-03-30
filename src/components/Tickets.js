import React from "react";
import { connect } from "react-redux";
import Ticket from "./Ticket.js";

const Tickets = ({ tickets }) => {
  return tickets.map((ticket, i) => {
    return <Ticket key={i} ticket={ticket} segments={ticket.segments} />;
  });
};

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
  };
};

export default connect(mapStateToProps, null)(Tickets);
