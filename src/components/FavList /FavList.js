import React from 'react'
import {Card , CardGroup,Button} from "react-bootstrap";
// https://movies-library-barham-farraj.herokuapp.com/addmovie
 function FavList (props){
    async function deleteMovie(movie) {
        try{
            const deleteMethod = {
              method: 'DELETE',
              headers: { 'Content-type': 'application/json; charset=UTF-8'},
            }
            fetch(`${ process.env.REACT_APP_API}/DELETE/${movie.id}`, deleteMethod) 
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err)) 
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
      }
    return(
        <div id="cards">
         <CardGroup style={{ display: "flex", justifyContent: "space-around" }}>
             {
                props.favMovies && props.favMovies.map(movie => {
                    return (
                        <Card key={movie.id}>
                            <Card.Img variant="top" src={movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.caption}
                                </Card.Text>
                            </Card.Body>
                            <Button variant="primary" onClick={() => {deleteMovie(movie)}}>Delete</Button>
                        </Card>
                    )
                })
            }
            
        
        </CardGroup>
        </div>
    )
}
export default FavList;
