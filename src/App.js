import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import FavList from './components/MovieList/MovieList.js';
import Navibar from './components/Navbar/Navbar.js';

function App() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);

      const data = await response.json();
      let capData = []
      for (let c of data) {
        c["caption"] ="No Caption"
        c["isCaption"] =false
        capData.push(c)
        
      }
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
    const [favMovies, setFavMovies] = useState();

    const fetchFavData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER}/getmovies`);
  
        const data = await response.json();
        // let capData = []
        // for (let c of data) {
        //   c["caption"] ="No Caption"
        //   c["isCaption"] =false
        //   capData.push(c)
          
        // }
        setFavMovies(data);
        
      } catch (error) {
        console.log("error", error);
      }
    };
      useEffect(() => {
        fetchFavData();
      }, []);
    const [expand,setExpand]=useState(false)
  function handleExpand(){
    setExpand(!expand)
  }
 
  return (
    <>
    <div id= "Header">
     <Navibar/>
    </div>
    <div id="main">
      <Routes>
      <Route path="/"element={<Home movies={movies} addComment={addComment} expand={handleExpand} isExpanded={expand}/>}/>
      <Route path="/favorites" element={<FavList favMovies={favMovies} />}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
