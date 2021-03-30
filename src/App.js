import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";
import LoadButton from "./components/LoadButton";

const App = () => {
  return (
    <div className="wrapper">
      <div className="Vertical-wrapper">
        <Header />
      </div>
      <div className="Horizontal-wrapper">
        <Sidebar />
        <LoadButton />
        <Main />
      </div>
    </div>
  );
};

export default App;
