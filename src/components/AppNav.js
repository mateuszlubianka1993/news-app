import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../styles/AppNav.css';

class AppNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">News App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                </Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav pullRight>
                        <Nav.Link >
                            <Link to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/entertainment">Entertainment</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/health">Health</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/science">Science</Link>
                        </Nav.Link>
                            <Nav.Link >
                        <Link to="/sports">Sports</Link>
                            </Nav.Link>
                        <Nav.Link >
                            <Link to="/technology">Technology</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default AppNav;
