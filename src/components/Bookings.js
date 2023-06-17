import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import FakeBookings from "../data/fakeBookings";
import React, { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
