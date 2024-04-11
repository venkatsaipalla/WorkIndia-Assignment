import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import SingleMovieDetail from "./components/SingleMovieDetail";
import SearchedMovie from "./components/SearchedMovie";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ height: "100vh", width: "100vw", overflowX: "hidden" }}>
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:movieId" element={<SingleMovieDetail />} />
          {/* Updated route */}
          <Route path="/search" element={<SearchedMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
