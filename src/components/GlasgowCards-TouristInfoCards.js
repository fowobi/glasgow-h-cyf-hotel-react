import React from "react";

const GlasgowCards = () => {
  return (
    <div className="card">
      <img
        src="https://peoplemakeglasgow.com/imager/general/86786/Kelvingrove-Art-Gallery-and-Museum_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        className="card-img-top"
        alt="Glasgow"
      />

      <div className="card-body">
        <h1>Glasgow</h1>
        <p>
          Discover the vibrant city of Glasgow with its rich culture and
          history.
        </p>

        <a
          href="https://peoplemakeglasgow.com"
          target="_blank"
          className="btn btn-primary">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default GlasgowCards;
