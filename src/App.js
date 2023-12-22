import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./Components/MovieCard";
import Banner from "./Components/Banner";

const API_URL = "https://www.omdbapi.com/?apikey=27d0821&";

const App = () => {
  const [movies, setMovies] = useState(["*"]);
  const [searchValue, setSearchValue] = useState("");

  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    fetchMovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1>CineVault</h1>

      <div className="search">
        <input
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => fetchMovies(searchValue)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>
            Type in the Search box and hit{" "}
            <img width={20} height={20} src={SearchIcon} alt="search" />
          </h2>
        </div>
      )}
      <Banner />
    </div>
  );
};

export default App;
