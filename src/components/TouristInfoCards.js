
import React from "react";



const TouristInfoCards = () => {
  return (
    <div className="card">
      <div>
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

          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Visit Website
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fcorn-exchange-manchester_6__783279711.jpg&action=ProductDetailFullWidth2"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Experience the dynamic city of Manchester with its bustling music
            scene and iconic landmarks.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Visit Website
          </a>
        </div>
      </div>

      <div>
        <img
          src="https://cdn-lnp.dataweavers.io/-/media/images/london/visit/whats-on/event-pages/buckinghampalace1920x1080.jpg?rev=c88f581f5aa2444f97f3343f60008663?mw=640&hash=52C77C542B4531A72B120C5586046410.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Explore the cosmopolitan city of London with its world-class
            attractions and diverse culture.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;


