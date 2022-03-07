import React from "react";
import Header from "./components/Header";
import data from "./data/data";
import "./app.css";
import TravelList from "./components/TravelList";
import MyGlobalContext from "./context/my-context";

function App() {
  return (
    <div className="app">
      <Header />
      <MyGlobalContext.Provider value={data}>
        <TravelList />
      </MyGlobalContext.Provider>
    </div>
  );
}

export default App;
