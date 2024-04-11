import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";

const ImageBasePath = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsExpanded(true), 800));
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsExpanded(false), 800));
  };

  return (
    <div
      className={`movie-card ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={`${ImageBasePath}${movie.poster_path}`} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {isExpanded && (
          <div>
            <p className="overview">{movie.overview}</p>
            <div className="rating">
              <FaStar color="#ffd700" size={20} />
              <span>{movie.vote_average}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
