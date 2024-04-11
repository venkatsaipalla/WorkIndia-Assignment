import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { Link } from "react-router-dom"; 
import Loader from "../Loader/Loader";
import { PaginationComponent } from "../Pagination/index.js";
import {MovieCard,MovieCardMobile} from "../MovieCard/index.js";

const ApiKey = "82703bde347abd1cddce530db029c8ef";
const BaseUrl = "https://api.themoviedb.org/3";
const ImageBasePath = "https://image.tmdb.org/t/p/w500";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetchTopRatedMovies(currentPage);
  }, [currentPage]);
  const fetchTopRatedMovies = async (page) => {
    try {
      const response = await axios.get(
        `${BaseUrl}/movie/top_rated?api_key=${ApiKey}&language=en-US&page=${page}`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };
  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <div className="top-rated-container">
      <h2 style={{ color: "white" }}>Top Rated Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard movie={movie} />
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

export default TopRated;
