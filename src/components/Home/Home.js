
import { Row, Container } from "react-bootstrap";
import MovieList from '../MovieList/MovieList';

function Home(props) {

    return (
        <>
            <h1>Home Page</h1>
            <main>
                {props.movies && (
                    <Container fluid className="main-container">
                        <Row className="flex-row">
                            <MovieList movies={props.movies} addComment={props.addComment} />
                        </Row>
                    </Container>
                )}
            </main>
        </>
    )
}

export default Home;