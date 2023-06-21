import React from "react";
import Bookings from "./components/Bookings";
import "./App.css";
import SearchResult from "./components/SearchResult";
import Heading from "./components/Heading";
import Restaurant from "./components/Restaurant";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";

const App = () => {
  return (
    <div>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
