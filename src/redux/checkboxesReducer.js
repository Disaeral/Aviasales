import { CHECK_CHECKBOX, UNCHECK_CHECKBOX } from "./types";
import { checkCheckboxes, uncheckCheckboxes } from "./handleCheckboxes";
const initialState = {
  checkboxes: [
    { id: 4, checked: false },
    { id: 0, checked: false },
    { id: 1, checked: false },
    { id: 2, checked: false }, 
    { id: 3, checked: false },
  ],
};

export const checkboxesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CHECKBOX:
      return {
        checkboxes: checkCheckboxes(state.checkboxes, action.payload),
        ...state
      };
    case UNCHECK_CHECKBOX:
      return {
        checkboxes: uncheckCheckboxes(state.checkboxes, action.payload),
        ...state
      };
    default:
      return state;
  }
};
