import React from "react";
import { useDispatch } from "react-redux";
import { check, filterTickets, uncheck } from "../redux/actions";
import { resetFilter } from "../redux/actions.js";

const filterCheckboxes = (checkboxes) => {
  let filteredCheckboxes = [];
  filteredCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  return filteredCheckboxes;
};

const SidebarItem = ({ value, name, notChecked, checkboxes }) => {
  const dispatch = useDispatch();
  return (
    <div className="Sidebar-item">
      <input
        type="checkbox"
        onChange={() => {
          if (notChecked) {
            notChecked = !notChecked;
            dispatch(check(value));
            dispatch(filterTickets(value));
            filterCheckboxes(checkboxes);
          } else if (!notChecked) {
            notChecked = !notChecked;
            dispatch(uncheck(value));
            if (filterCheckboxes(checkboxes).length === 0) {
              dispatch(resetFilter());
            }
          }
        }}
        id={`option${value}`}
        name="option1"
        value="All"
        className="Checkbox"
      />
      <label for={`option${value}`}>{name}</label>
    </div>
  );
};

export default SidebarItem;
