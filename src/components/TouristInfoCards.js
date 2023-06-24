function TouristInfoCards(prop) {
  return (
    <div className="CardContainer">
      {prop.result.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.imgSrc} alt={card.City} className="image" />
          <div className="card-body">
            <h1>{card.City}</h1>
            <p>{card.description}</p>
            <a href={card.link} target="_blank" className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TouristInfoCards
