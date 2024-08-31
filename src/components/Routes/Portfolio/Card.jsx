import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Card({ item, style, onClick, portfolioType }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/portfolio/${portfolioType}/?project=${item.URL_Title}`);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <button
      className={`card ${portfolioType}`}
      style={style}
      onClick={
        portfolioType !== "Wood"
          ? () => {
              handleNavigation();
              onClick();
            }
          : null
      }
    >
      {loading && <div className="loading">Loading...</div>}
      <img src={item.Thumbnail} alt={item.Title} onLoad={handleImageLoad} />
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
