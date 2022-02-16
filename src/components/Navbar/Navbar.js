import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // without Boostrap

function Navibar() {
    return (
        <Navbar bg="danger" variant="dark">
            <Container>
                <Navbar.Brand href="/">&#128083;</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favorite">Favorite List</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navibar;