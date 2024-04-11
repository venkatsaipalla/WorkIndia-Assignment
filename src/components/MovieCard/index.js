import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";

const ImageBasePath = "https://image.tmdb.org/t/p/w500";

export const MovieCard = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isOverviewExpanded, setOverviewExpanded] = useState(false);
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

  const toggleExpanded = () => {
    setOverviewExpanded(!isOverviewExpanded);
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
            <p className="overview ">{movie.overview}</p>
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

export const MovieCardMobile = ({ movie }) => {
  const [isOverviewExpanded, setOverviewExpanded] = useState(false);
  const toggleExpanded = () => {
    setOverviewExpanded(!isOverviewExpanded);
  };
  return (
    <li key={movie.release_date.slice(0, 4)} className="movieCardMobile">
      <img
        className="poster"
        src={`${ImageBasePath}${movie.poster_path}`}
        alt={movie.title}
      />
      <h3 className="movieTitle">{movie.title}</h3>
      <span className="movieYear">({movie.release_date.slice(0, 4)})</span>
      <p className={isOverviewExpanded ? "expanded" : "Pcollapsed"}>
        {movie.overview}
      </p>
      <button onClick={toggleExpanded}>
        {isOverviewExpanded ? "See Less" : "See More"}
      </button>
    </li>
  );
};

// ItemsList = (props) => {
//   return <ul>{props.items.map((item) => <MovieCard movie={item} />)}</ul>
// }
