import React , {useState} from 'react'
import { CardGroup } from 'react-bootstrap';
import ModalMovie from '../ModalMovie/ModalMovie.js'
import Movie from '../Movie/Movie.js'

function MovieList(props) {
  const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState();
    return (
     <>
         <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
             {
              props.movies.map(movie => {
              return  <div key={movie.id}>
              <Movie movie={movie} key={movie.id} setShowModal={setShowModal} setMovie={setMovie} />
              </div>
          })
           }
        </CardGroup>
      {showModal && <ModalMovie show={showModal} movie={props.movies} 
      handleColse={() => { setShowModal(false) }} 
      addComment={props.addComment} />}

    </>
    )
}

export default MovieList