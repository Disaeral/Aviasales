import { filterTickets, handleFilters, handleFiltersReset, resetFilterTickets } from "./filterTickets";
import { sortByPrice, sortByTime } from "./sortTickets";
import {
  FILTER_TICKETS,
  GET_SEARCH_ID,
  LOAD_TICKETS,
  RESET_BY_ID,
  RESET_FILTER,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME,
} from "./types";

const initialState = {
  isLoading: false,
  tickets: [],
  originalTickets: []
};

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_ID:
      console.log(action.payload)
      return {
        ...state,
        searchId:action.payload.searchId
      }
    case LOAD_TICKETS:
      return {
        ...state,
        originalTickets:state.originalTickets.concat(action.payload.tickets),
        tickets: state.tickets.concat(action.payload.tickets),
        stop: action.payload.stop,
      };
    case FILTER_TICKETS:
      return {
        ...state,
        tickets: filterTickets(state.tickets, action.payload),
      };
    case RESET_BY_ID:
      return {
        ...state,
        tickets: resetFilterTickets(state.originalTickets, action.payload)
      }
    case RESET_FILTER:
      return { ...state, tickets: state.originalTickets };
    case SORT_TICKETS_BY_TIME:
      return { ...state, tickets: sortByTime(state.tickets) };
    case SORT_TICKETS_BY_PRICE:
      return { ...state, tickets: sortByPrice(state.tickets) };
    default:
      return state;
  }
};
