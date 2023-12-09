import React, { useEffect } from "react";
import "./App.css";
import 'SearchIcon' from './search.svg';

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
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

export default App;
