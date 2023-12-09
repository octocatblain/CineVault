import React, { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

//27d0821

const API_URL = "https://www.omdbapi.com?apikey=27d0821";

const App = () => {
  const fetchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    fetchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>CineVault</h1>

      <div className="search">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for a movie..."
          value="batman"
          onChange={(e) => fetchMovies(e.target.value)}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => fetchMovies()} />
      </div>

      <div className="container">
        <div className="movie">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY879_.jpg"
            alt="movie poster"
          />
          <div className="movie-info">
            <h3>Movie Title</h3>
            <span className="green">PG-13</span>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, voluptatem, atque, quas quod quidem doloremque
              voluptatum quia dolorum nemo quibusdam repellat. Quisquam
              voluptates, voluptatem, atque, quas quod quidem doloremque
              voluptatum quia dolorum nemo quibusdam repellat.
            </p>
            <button className="btn">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
