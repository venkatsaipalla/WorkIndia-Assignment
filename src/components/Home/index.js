import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Added Link import
import "./index.css";
import Loader from "../Loader/Loader";
import { PaginationComponent } from "../Pagination/index.js";
import { MovieCard, MovieCardMobile } from "../MovieCard/index.js";
import useDeviceSize from "../../hooks/useDeviceSize.tsx";

import { ErrorPage } from "../CommonComponents/index.js";

const ApiKey = "2f265af523648bc1667bb17ef1d033aa";
const BaseUrl = "https://api.themoviedb.org/3";
const ImageBasePath = "https://image.tmdb.org/t/p/w500";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const deviceSize = useDeviceSize();

  const isMobile = deviceSize === "xs";
  useEffect(() => {
    fetchPopularMovies(currentPage);
  }, [currentPage]);

  const fetchPopularMovies = async (page) => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.get(
        `${BaseUrl}/movie/popular?api_key=${ApiKey}&language=en-US&page=${page}`
      );
      setMovies(response.data.results);
      response.data.total_pages >= 500
        ? setTotalPages(500)
        : setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.error("Error fetching popular movies:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;

  return (
    <div className="home-container">
      <h2 style={{ color: "white" }}>Popular Movies</h2>
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

export default Home;
