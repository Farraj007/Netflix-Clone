import React,{ useRef } from 'react';
import { Button, Modal, Form } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalMovie(props) {

    const commentRef = useRef();
    function handleCaption(e) {
        e.preventDefault()
        const userCaption = commentRef.current.value;
        ;
        const newData = { ...props.movie, userCaption };
        props.addComment(newData, props.movie.id);  
    }
    async function addToFavorite(movie){
        try{
            const res = await fetch(`${process.env.REACT_APP_SERVER}/addmovie`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title : movie.title,
                    poster_path : `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`,
                    overview : movie.caption,
                })
            })
            const data = await res.json();


        } catch (error) {
            console.log("error", error);
        }
    }




    return (
        <>
            <Modal id="modal"show={props.show} onHide={() => { props.handleColse() }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img id="photo"width='100%' src= {`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${props.movie.poster_path}`} alt={props.movie.title} />
                    <p>{props.movie.isCaption ? props.movie.caption: "No Text Provided"}</p>
                    {/* <p>{props.movie.caption}</p> */}
                </Modal.Body>
                <Modal.Footer id="modalFooter">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Captions:</Form.Label>
                        <Form.Control ref={commentRef} type="textarea" placeholder={props.movie.isCaption ? props.movie.caption : "Add Your Caption Here..."} />
                    </Form.Group>
                    <Button className="addBtn" variant="primary" type="submit" onClick={handleCaption}  >
                        Add a Caption
                    </Button>
                    <Button variant="primary" onClick={()=>{ addToFavorite(props.movie)}}> Add to Fav</Button>
                    <Button variant="secondary" onClick={props.handleColse}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMovie;