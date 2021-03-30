import { combineReducers } from "redux";
import { switchReducer } from "./switchReducer";
import { ticketReducer } from "./ticketReducer";
import { checkboxesReducer } from "./checkboxesReducer";

export const rootReducer = combineReducers({
  tickets: ticketReducer,
  switch: switchReducer,
  checkboxes: checkboxesReducer,
});
