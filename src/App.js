import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Main from "./components/Main.js";
import Loader from './components/Loader.js'
import {  useDispatch } from "react-redux";
import {  loadTickets,  } from "./redux/actions";
import { getSearchId, getTickets } from "./http/ticketsAPI";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getSearchId().then(searchId =>
      getTickets(searchId)
      .then(dispatch(loadTickets()))
      .finally(setIsLoading(false))
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="Vertical-wrapper">
        <Header />
      </div>
      <div className="Horizontal-wrapper">
        <Sidebar />
        {
         isLoading? <Loader /> : null
        }

        <Main />
      </div>
    </div>
  );
};

export default App
