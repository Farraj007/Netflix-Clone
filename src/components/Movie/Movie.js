import React from "react";
import { Card,Button } from "react-bootstrap";

function Movie(props) {
  return (
    <>
      <div key={props.movie.id}>
        <Card key={props.movie.id}>
          <Card.Img variant="top" src={props.movie.poster_path} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
              {props.movie.overview}
            </Card.Text>
            <Card.Text>
              {props.movie.caption ? props.movie.caption : "No Caption Added"}
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
    </>
  );
}

export default Movie;
