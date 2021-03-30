export const sortByPrice = (tickets) => {
  let newTickets = tickets.slice();
  return newTickets.sort((ticket1, ticket2) => {
    let price1 = ticket1.price;
    let price2 = ticket2.price;
    let comparison = 0;
    if (price1 > price2) {
      comparison = 1;
    } else if (price1 < price2) {
      comparison = -1;
    }
    return comparison;
  });
};

export const sortByTime = (tickets) => {
  const firstFilter = (ticket) => {
    let segmentDur1 = ticket.segments[0].duration;
    let segmentDur2 = ticket.segments[1].duration;
    let leastSegmentDur = segmentDur1 < segmentDur2 ? segmentDur1 : segmentDur2;
    return { ...ticket, leastDur: leastSegmentDur };
  };
  let newTickets = tickets.slice().map((ticket) => firstFilter(ticket));
  newTickets.sort((ticket1, ticket2) => {
    let dur1 = ticket1.leastDur;
    let dur2 = ticket2.leastDur;
    let comparison = 0;
    if (dur1 > dur2) {
      comparison = 1;
    } else if (dur1 < dur2) {
      comparison = -1;
    }
    return comparison;
  });
  return newTickets;
};
