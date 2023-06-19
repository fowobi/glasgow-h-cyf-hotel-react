import cities from "../data/cities.json";

const TouristInfoCards = () => {
  const prop = cities;
  return (
    <div className="Main-container">
      {prop.map((card) => (
        <div className="cards-container">
          <div className="card">
            <img src={card.imgSrc} alt={card.City} className="card-img-top" />
          </div>

          <div className="card-body">
            <h1>{card.City}</h1>
            <p>{card.description}</p>
            <a href={card.link} target="_blank" className="btn btn-primary">
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
