import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Loader from "../Loader/Loader";
import { PaginationComponent } from "../Pagination/index.js";
import { Link } from "react-router-dom";
import { MovieCard, MovieCardMobile } from "../MovieCard/index.js";
import useDeviceSize from "../../hooks/useDeviceSize.tsx";

import { ErrorPage } from "../CommonComponents/index.js";

const ApiKey = "82703bde347abd1cddce530db029c8ef";
const BaseUrl = "https://api.themoviedb.org/3";
const ImageBasePath = "https://image.tmdb.org/t/p/w500";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const deviceSize = useDeviceSize();

  const isMobile = deviceSize === "xs";
  useEffect(() => {
    fetchUpcomingMovies(currentPage);
  }, [currentPage]);
  const fetchUpcomingMovies = async (page) => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `${BaseUrl}/movie/upcoming?api_key=${ApiKey}&language=en-US&page=${page}`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="upcoming-container">
      <h2 style={{ color: "white" }}>Upcoming Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            {isMobile ? (
              <MovieCardMobile movie={movie} />
            ) : (
              <MovieCard movie={movie} />
            )}
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <PaginationComponent
          totalPages={totalPages}
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Upcoming;
