import { filterTickets } from "./filterTickets";
import { sortByPrice, sortByTime } from "./sortTickets";
import {
  FILTER_TICKETS,
  LOAD_TICKETS,
  RESET_FILTER,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME,
} from "./types";

const initialState = {
  loaded: false,
  tickets: [],
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TICKETS:
      return {
        ...state,
        tickets: state.tickets.concat(action.payload),
        loaded: !state.loaded,
      };
    case FILTER_TICKETS:
      return {
        ...state,
        tickets: filterTickets(state.tickets, action.payload),
      };
    case RESET_FILTER:
      return { ...state, tickets: initialState.tickets };
    case SORT_TICKETS_BY_TIME:
      return { ...state, tickets: sortByTime(state.tickets) };
    case SORT_TICKETS_BY_PRICE:
      return { ...state, tickets: sortByPrice(state.tickets) };
    default:
      return state;
  }
};
