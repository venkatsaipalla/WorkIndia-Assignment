import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import Loader from "../Loader/Loader";
import { MovieCard, MovieCardMobile } from "../MovieCard/index.js";
import { ErrorPage, NotResults } from "../CommonComponents/index.js";
import useDeviceSize from "../../hooks/useDeviceSize.tsx";

const ApiKey = "82703bde347abd1cddce530db029c8ef";
const BaseUrl = "https://api.themoviedb.org/3";
const ImageBasePath = "https://image.tmdb.org/t/p/w500";

const SearchedMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();
  const deviceSize = useDeviceSize();

  const isMobile = deviceSize === "xs";
  useEffect(() => {
    const searchMovies = async (query) => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `${BaseUrl}/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=1`
        );
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    if (query) {
      searchMovies(query);
    }
  }, [location.search]);

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="searched-movie-container">
      <h2 style={{ color: "white", margin: "0" }}>Searched Movies</h2>
      <div className="movie-list">
        {movies.length >= 1 ? (
          movies.map((movie) => (
            // <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              {isMobile ? (
                <MovieCardMobile movie={movie} />
              ) : (
                <MovieCard movie={movie} />
              )}
            </Link>
          ))
        ) : (
          <NotResults />
        )}
      </div>
    </div>
  );
};

export default SearchedMovie;
