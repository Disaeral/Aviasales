import {
  CHECK_CHECKBOX,
  FILTER_TICKETS,
  LOAD_TICKETS,
  REQUEST_TICKETS,
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
export function loadTickets(payload) {
  return {
    type: LOAD_TICKETS,
    payload,
  };
}
