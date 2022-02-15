import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=ee0ebbb2ad95b5fbc01a7c8444d20d5b`
      );

      const data = await response.json();
      let capData = []
      for (let c of data.results) {
        c["caption"] ="No Caption"
        c["isCaption"] =false
        capData.push(c)
        
      }
   console.log(capData[0])
      setMovies(capData);
      
    } catch (error) {
      console.log("error", error);
    }
  };
    const addComment = (data, id) => {
          let addComment = movies.map(movies => {
              if (movies.id === id) {
                  movies.caption = data.userCaption;
                  movies.isCaption = !movies.isCaption;
                  return movies;
              }
              else return movies
          })
      setMovies(addComment);
    };

    useEffect(() => {
      fetchData();
    }, []);
 
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} addComment={addComment} />}
        />
        {/* <Route path="/trending" element={<TrendingList />} /> */}
      </Routes>
    </>
  );
}

export default App;
