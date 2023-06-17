import React,{ useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";
// import FakeBookings from "../data/fakeBookings";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log('Page first renders on the screen.');

    fetch('https://cyf-react.glitch.me')
      .then((response) => response.json())
      .then((data) => setBookings(data));
      
       }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult results={bookings}/>
      </div>
    </div>
  );
};

export default Bookings;
