import React from "react";
import Header from "./components/Header";
import data from "./data/data";
import "./app.css";
import TravelList from "./components/TravelList";

function App() {
  return (
    <div className="app">
      <Header />
      <TravelList data={data} />
    </div>
  );
}

export default App;
