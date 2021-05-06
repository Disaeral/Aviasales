import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  check,
  filterTickets,
  resetFilterById,
  uncheck,
} from "../redux/actions";

const SidebarItem = ({
  value,
  name,
  checked,
  checkboxes,
  id,
  filteredCheckboxes,
}) => {
  const dispatch = useDispatch();
  const [cheсk, setCheck] = useState(checked);
  return (
    <div className="Sidebar-item">
      <input
        type="checkbox"
        onChange={() => {
          if (cheсk) {
            setCheck(false);
            dispatch(resetFilterById(id));
            dispatch(uncheck(id));
          } else {
            setCheck(true);
            dispatch(filterTickets(id));
            dispatch(check(id));
          }
        }}
        id={`option${value}`}
        name="option1"
        value="All"
        className="Checkbox"
        checked={cheсk}
      />
      <label for={`option${value}`}>{name}</label>
    </div>
  );
};

export default SidebarItem;
