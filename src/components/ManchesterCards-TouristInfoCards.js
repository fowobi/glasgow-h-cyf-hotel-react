import React from "react";

const ManchesterCards = () => {
  return (
    <div className="card">
      <img
        src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FManOne-03%284%29.jpg&action=Background_Overlay"
        className="card-img-top"
        alt="Manchester"
      />

      <div className="card-body">
        <h1>Manchester</h1>
        <p>
          Experience the dynamic city of Manchester with its bustling music
          scene and iconic landmarks.
        </p>

        <a
          href="https://visitmanchester.com"
          target="_blank"
          className="btn btn-primary">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default ManchesterCards;
