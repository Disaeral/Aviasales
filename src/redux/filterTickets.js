export const filterTickets = (tickets, checkboxID) => {
  const values = [4, 0, 1, 2, 3]
  checkboxID = values[checkboxID]
  const segmentsStops = (ticket) => {
    let segmentStops = [];
    ticket.segments.forEach((segment) =>
      segmentStops.push(segment.stops.length)
    );
    return { ...ticket, stops: segmentStops };
  };
  
  let newTickets = tickets.slice().map((ticket) => segmentsStops(ticket));


  return newTickets.filter(ticket=>{
    
    for(let stop of ticket.stops) {
      if (stop === checkboxID) {
        return true
      }

    }

  })
}


export const resetFilterTickets = (originalTickets, checkboxID) => {
  return originalTickets
}

/*const handleFilters = (filters, newFilter) => {
  filters = filters.includes(newFilter)?filters:filters.concat(newFilter)
  return filters  
}

export const filterTickets = (tickets, checkboxID, filters) => {

  const values = [4, 0, 1, 2, 3]
  checkboxID = values[checkboxID]
  
  const newFilters = handleFilters(filters, checkboxID)
  const segmentsStops = (ticket) => {
    let segmentStops = [];
    ticket.segments.forEach((segment) =>
      segmentStops.push(segment.stops.length)
    );
    return { ...ticket, stops: segmentStops };
  };
  
  let newTickets = tickets.slice().map((ticket) => segmentsStops(ticket));
  
  const filterByFilter = (ticket, newFilters) => {
    for(let stop of ticket.stops) {  
      for(let filter of newFilters) {
        if(stop === filter) {
           return true
        }
        else {
          return false
        }
      }
    }
  }
  return newTickets.filter(ticket=>filterByFilter(ticket, newFilters))
};

const handleFiltersReset = (filters, filterToBeRemoved) => {
  filters = filters.filter(elem=>elem!==filterToBeRemoved)
  console.log(filters, 'filters')
  return filters
}
export const resetFilterTickets = (initialTickets, checkboxID, filters) => {

  const values = [4, 0, 1, 2, 3]
  checkboxID = values[checkboxID]

  const newFilters = handleFiltersReset(filters, checkboxID)
  console.log(newFilters)
  const segmentsStops = (ticket) => {
    let segmentStops = [];
    ticket.segments.forEach((segment) =>
      segmentStops.push(segment.stops.length)
    );
    return { ...ticket, stops: segmentStops };
  };
  let newTickets = initialTickets.slice().map((ticket) => segmentsStops(ticket));

  const filterWithoutId = (ticket, filters) => {
    for(let stop of ticket.stops) {     // Iterate through A from 0 to 50
      for(let filter of filters) {
        console.log(stop, filter, 'stop and filter')   // Iterate through B from 0 to 50
        if(stop === filter) {
           return true
        }
        else {
          return false
        }
      }
    }
  }
  
  return newTickets.filter(ticket=>filterWithoutId(ticket, newFilters))
}*/