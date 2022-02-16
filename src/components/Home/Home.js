
import { Row, Container } from "react-bootstrap";
import MovieList from '../MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';



function Home(props) {

    return (
        <>
            <h1 id="title">Welcome To Barham Farraj's Movies  </h1>
            <main>
                {props.movies && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies={props.movies} addComment={props.addComment}
                            expand={props.expand} isExpanded={props.isExpanded} />
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

export default Home;