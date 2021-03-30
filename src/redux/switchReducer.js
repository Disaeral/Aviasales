import { RESET_FILTER, SWITCH_LEFT, SWITCH_RIGHT } from "./types";

const initialState = {
  switch: null,
};

export const switchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LEFT:
      return { ...state, switch: "left" };
    case SWITCH_RIGHT:
      return { ...state, switch: "right" };
    case RESET_FILTER:
      return { ...state, switch: null };
    default:
      return state;
  }
};
