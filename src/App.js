import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/Navbar/Navbar.js'
function App() {
  const [movies, setMovies] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://movies-library-barham-farraj.herokuapp.com/trending`
      );

      const data = await response.json();
      let capData = []
      for (let c of data) {
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
        <Route
          path="/"
          element={<Home movies={movies} addComment={addComment} expand={handleExpand} isExpanded={expand}/>}
        />
        {/* <Route path="/trending" element={<TrendingList />} /> */}
      </Routes>
      </div>
      {/* <div id= "Footer">
     <Footer/>
    </div> */}
    </>
  );
}

export default App;
