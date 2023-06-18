import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import React, { useState, useEffect } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Page first renders");

    fetch("https://cyf-react.glitch.me")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP Error");
        }
        return response.json();
      })
      .then((data) => setBookings(data))
      .catch((error) => setError(error.message));
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <Search search={search} />
            <SearchResult results={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;

