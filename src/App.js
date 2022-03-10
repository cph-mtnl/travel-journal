import React, { createContext, useState } from "react";
import Header from "./components/Header";
import data from "./data/data";
import "./app.css";
import TravelList from "./components/TravelList";
import TravelCreator from "./components/TravelCreator";
import MyContext from "./context";

function App() {
  const [destinations, setDestinations] = useState(data);
  const context = {
    destinations,
    setDestinations,
  };

  return (
    <div className="app">
      <Header />
      <div className="travel-grid">
        <MyContext.Provider value={context}>
          <TravelList />
        </MyContext.Provider>
        <TravelCreator />
      </div>
    </div>
  );
}

export default App;
