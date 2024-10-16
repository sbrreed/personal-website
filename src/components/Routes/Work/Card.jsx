import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Card({ item, style, onClick, workType }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/work/${workType}/?project=${item.URL_Title}`);
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <button
      className={`card ${workType}`}
      style={style}
      onClick={
        workType !== "Wood"
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
