import React , {useState} from 'react'
import "./MovieList.css";
import { CardGroup } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie.js'
import Movie from '../Movie/Movie.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function MovieList(props) {
  const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    return (
     <div id="cards">
         <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
             {
              props.movies.map(movie => {
              return  <div key={movie.id}>
              <Movie movie={movie} key={movie.id} setShowModal={setShowModal} setMovie={setMovie} expand={props.expand} isExpanded={props.isExpanded}/>
              </div>
          })
           }
        </CardGroup>
      {showModal && <ModalMovie show={showModal} movie={movie} 
      handleColse={() => { setShowModal(false) }} 
      addComment={props.addComment} />}

    </div>
    )
}

export default MovieList;