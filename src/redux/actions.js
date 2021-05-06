import { getSearchId, getTickets } from "../http/ticketsAPI";
import {
  CHECK_CHECKBOX,
  FILTER_TICKETS,
  GET_SEARCH_ID,
  LOAD_TICKETS,
  REQUEST_TICKETS,
  RESET_BY_ID,
  RESET_FILTER,
  SORT_TICKETS_BY_PRICE,
  SORT_TICKETS_BY_TIME,
  SWITCH_LEFT,
  SWITCH_RIGHT,
  UNCHECK_CHECKBOX,
} from "./types";

export function sortTicketsByPrice() {
  return {
    type: SORT_TICKETS_BY_PRICE,
  };
}
export function sortTicketsByTime() {
  return {
    type: SORT_TICKETS_BY_TIME,
  };
}
export function filterTickets(checkboxID) {
  return {
    type: FILTER_TICKETS,
    payload: checkboxID,
  };
}
export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}
export function resetFilterById(id) {
  return {
    type: RESET_BY_ID,
    payload: id
  }
}
export function switchLeft() {
  return {
    type: SWITCH_LEFT,
  };
}
export function switchRight() {
  return {
    type: SWITCH_RIGHT,
  };
}
export function check(checkboxID) {
  return {
    type: CHECK_CHECKBOX,
    payload: checkboxID,
  };
}
export function uncheck(checkboxID) {
  return {
    type: UNCHECK_CHECKBOX,
    payload: checkboxID,
  };
}
export function requestTickets() {
  return {
    type: REQUEST_TICKETS,
  };
}
export function getId() {
  return function (dispatch) {
    dispatch({
      type: GET_SEARCH_ID,
      payload: getSearchId(),
    });
  };
}

export function loadTickets() {
  return function (dispatch) {
    fetch("https://front-test.beta.aviasales.ru/search")
      .then((res) => res.json())
      .then((data) => {
        const searchId = data.searchId;
        fetch(
          "https://front-test.beta.aviasales.ru/tickets?searchId=" + searchId
        )
          .then((res) => res.json())
          .then((data) => {
            dispatch({
              type: LOAD_TICKETS,
              payload: {
                tickets: data.tickets,
                stop: data.stop,
              },
            });
            if (!data.stop) {
            }
          });
      });
  };
}
