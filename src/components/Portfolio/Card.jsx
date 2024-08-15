function Card({ item, style, onClick, portfolioType }) {
  return (
    <button
      className={`card ${portfolioType}`}
      style={style}
      onClick={portfolioType != "Wood" ? onClick : ""}
    >
      <img src={item.Thumbnail} alt={item.Title} />
      {item.Title && (
        <div className="card-content">
          <h2 className="card-title">{item.Title}</h2>
          <p className="card-description">{item.Description}</p>
        </div>
      )}
    </button>
  );
}

export default Card;
