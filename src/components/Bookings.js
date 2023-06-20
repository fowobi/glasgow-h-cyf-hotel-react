import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
import React, { useState, useEffect } from "react";

const Bookings = () => {
<<<<<<< Updated upstream
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("Page first renders");

    fetch("https://cyf-react.glitch.me/delayed")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP Error");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
=======
  const [bookings, setBookings] = useState(FakeBookings);
  const [filteredBookings, setFilteredBookings] = useState([]);
>>>>>>> Stashed changes

  const search = (searchVal) => {
    const lowercaseSearchVal = searchVal.toLowerCase();
    const filteredResults = FakeBookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(lowercaseSearchVal) ||
        booking.surname.toLowerCase().includes(lowercaseSearchVal)
    );
    setFilteredBookings(filteredResults);
  };

  return (
    <div className="App-content">
      <div className="container">
<<<<<<< Updated upstream
        {isLoading ? (
          <div className="loading-message">Loading...please wait</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <Search search={search} />
            <SearchResult results={bookings} />
          </>
        )}
=======
        <Search search={search} />
        <SearchResult
          results={filteredBookings.length > 0 ? filteredBookings : bookings}
        />
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Bookings;
