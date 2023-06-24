import React from "react";
import Bookings from "./components/Bookings";
import "./App.css";
import SearchResult from "./components/SearchResult";
import Heading from "./components/Heading";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import DataOfCities from "./data/cities.json";

const App = () => {
  return (
    <div>
      <Heading />
      <TouristInfoCards result={DataOfCities} />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
