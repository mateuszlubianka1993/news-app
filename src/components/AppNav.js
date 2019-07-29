import React from 'react';
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../styles/AppNav.css';

class AppNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="menu-items">News App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                </Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <NavItem >
                            <Link to="/" className="menu-items">Home</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/entertainment" className="menu-items">Entertainment</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/health" className="menu-items">Health</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/science" className="menu-items">Science</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/sports" className="menu-items">Sports</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/technology" className="menu-items">Technology</Link>
                        </NavItem>
                        <NavItem >
                            <Link to="/search" className="menu-items">Search</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };
}

export default AppNav;
