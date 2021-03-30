import React from "react";
import { connect } from "react-redux";
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

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">Количество пересадок</div>
      <form>
        {names.map((name, i) => {
          return (
            <SidebarItem
              checkboxes={checkboxes}
              notChecked={checkboxes[i]}
              key={i}
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

export default connect(mapStateToProps)(Sidebar);
