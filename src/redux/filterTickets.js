export const filterTickets = (tickets, checkboxID) => {
  const segmentsStops = (ticket) => {
    let segmentStops = [];
    ticket.segments.forEach((segment) =>
      segmentStops.push(segment.stops.length)
    );
    return { ...ticket, stops: segmentStops };
  };

  let newTickets = tickets.slice().map((ticket) => segmentsStops(ticket));
  switch (checkboxID) {
    case 4:
      return tickets;
    case 0:
      return newTickets.filter(
        (ticket) => ticket.stops[0] === 0 || ticket.stops[1] === 0
      );
    case 1:
      return newTickets.filter(
        (ticket) => ticket.stops[0] === 1 || ticket.stops[1] === 1
      );
    case 2:
      return newTickets.filter(
        (ticket) => ticket.stops[0] === 2 || ticket.stops[1] === 2
      );
    case 3:
      return newTickets.filter(
        (ticket) => ticket.stops[0] >= 3 || ticket.stops[1] >= 3
      );
    default:
      return tickets;
  }
};
