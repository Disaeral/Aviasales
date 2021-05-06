import React from "react";
import { connect, useDispatch } from "react-redux";
import SidebarItem from "../components/SidebarItem.js";

const Sidebar = ({ checkboxes }) => {
  const names = [
    "Все",
    "Без пересадок",
    "1 пересадка",
    "2 пересадки",
    "3 и более",
  ];
  const values = [4, 0, 1, 2, 3];
  const dispatch = useDispatch()
  const filteredCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
  return (
    <div className="Sidebar">
      <div className="Sidebar-header">Количество пересадок</div>
      <form>
        {names.map((name, i) => {
           return (
            <SidebarItem
              checked={checkboxes[i].checked}
              checkboxes={checkboxes}
              
              key={i}
              id={i}
              name={name}
              value={values[i]}
            />
          );
        })}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  
  return {
    checkboxes: state.checkboxes.checkboxes,
  };
};

export default connect(mapStateToProps, null)(Sidebar);
