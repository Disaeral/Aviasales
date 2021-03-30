import React from "react";
import { useDispatch } from "react-redux";
import { requestTickets } from "../redux/actions";

const LoadButton = () => {
  const dispatch = useDispatch();
  return (
    <span
      className="button"
      id="tickets"
      onClick={() => {
        dispatch(requestTickets());
      }}
    >
      get tickets
    </span>
  );
};

export default LoadButton;
