import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { ErrorPage } from "../CommonComponents/index.js";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const ApiKey = "82703bde347abd1cddce530db029c8ef";
const BaseUrl = "https://api.themoviedb.org/3";
const SingleMovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(
          `${BaseUrl}/movie/${movieId}?api_key=${ApiKey}&language=en-US`
        );
        const castResponse = await axios.get(
          `${BaseUrl}/movie/${movieId}/credits?api_key=${ApiKey}&language=en-US`
        );
        setMovieDetails(response.data);
        setCast(castResponse.data.cast);
        setCrew(castResponse.data.crew);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) return <Loader />;
  if (error)
    return (
      <div>
        <ErrorPage />
      </div>
    );
  if (!movieDetails) return null;

  return (
    <div
      className="bg-container"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 10), rgba(7, 4, 4, 0.5)), url('https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}')`,
      }}
    >
      <div className="single-movie-container">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="moviePoster"
        />
        <div className="movieDetailsContainer">
          <h2 className="Movietitle">{movieDetails.title}</h2>
          <div className="ratingDiv">
            <div className="ratingStats">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/34/Red_star.svg"
                alt="star"
                style={{ width: "30px", height: "30px" }}
              />

              <p className="ratingText">
                {movieDetails.vote_average.toFixed(2)}/10
              </p>
              <h6 className="totoVotes">
                {"("}
                {movieDetails.vote_count}
                {")"}
                <span className="totoVotes"> {"Votes  >"}</span>
              </h6>
            </div>
            <button className="rateNowButton">Rate now</button>
          </div>
          {/* <h3 className="rating">Rating: {movieDetails.vote_average}</h3> */}
          <div className="movieStats">
            <div className="statsinfoDiv">
              {movieDetails.spoken_languages[0].english_name}
            </div>
          </div>
          <h5 className="budget">
            <span style={{ color: "red", fontSize: "20px", fontWeight: "600" }}>
              Budget
            </span>{" "}
            : {movieDetails.budget > 1 ? movieDetails.budget : "N/A"}
          </h5>
          <div className="over">
            <p>{movieDetails.overview}</p>
          </div>
        </div>

        <div className="castContainer">
          <h3 className="castTitle">Cast :</h3>
          <br />
          <div className="all-cast-div">
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper all-cast-div"
            >
              {cast.map((actor) => (
                <SwiperSlide key={actor.id} className="cast-div">
                  {/* <div key={actor.id} className="cast-div"> */}
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={actor.name}
                    className="cast-image"
                  />
                  <div className="cast-info">
                    <p className="cast-name">{actor.name}</p>
                    <p className="cast-character">{actor.character}</p>
                  </div>
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <br />
        <br />
        <div className="castContainer">
          <h3 className="castTitle">Crew :</h3>
          <br />
          <div className="all-cast-div">
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper all-cast-div"
            >
              {crew.map((actor) => (
                <SwiperSlide key={actor.id} className="cast-div">
                  {/* <div key={actor.id} className="cast-div"> */}
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    alt={actor.name}
                    className="cast-image"
                  />
                  <div className="cast-info">
                    <p className="cast-name">{actor.name}</p>
                    <p className="cast-character">{actor.job}</p>
                  </div>
                  {/* </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetail;
