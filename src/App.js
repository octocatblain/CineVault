import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//API Key = 27d0821

const API_URL = "https://www.omdbapi.com/?apikey=27d0821&";
// const IMG_URL = "http://img.omdbapi.com/?apikey=27d0821&";
const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.search);
  };

  useEffect(() => {
    fetchMovies("batman");
  }, []);

  return (
    <div className="app">
      <h1>CineVault</h1>

      <div className="search">
        <input
          placeholder="Search for a movie..."
          value="batman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard />
      </div>
    </div>
  );
};

export default App;
