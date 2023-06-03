import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import "./App.css";
import SearchResult from "./components/SearchResult";
import Heading from "./components/Heading";

const App = () => {
  return (
    <>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchResult />
    </>
  );
};

export default App;
