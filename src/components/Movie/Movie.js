import React from "react";
import "./Movie.css";
import { Card,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function Movie(props) {
  function toggleExpand (){
    props.expand()
    }  
  return (
    <div >
      <div key={props.movie.id}>
        <Card key={props.movie.id} id="show">
          <Card.Img id="photo" variant="top" src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} />
          <Card.Body>
            <Card.Title>{ props.movie.title ? props.movie.title: "No title Available" }</Card.Title>
            <Card.Text>
            { props.isExpanded ? <p>{props.movie.overview} </p>:<p>{props.movie.overview.substring(0,100)}...</p>}
            {!props.isExpanded?<button id="showML" onClick={toggleExpand}>Show More</button>:<button id="showML" onClick={toggleExpand}>Show Less</button>} 
            </Card.Text>
            <Card.Text>
              {props.movie.caption}
            </Card.Text>

            <Button
              variant="primary"
              onClick={() => {
                props.setMovie(props.movie);
                props.setShowModal(true);
              }}
            >
              Show Modal
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Movie;
// {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`}