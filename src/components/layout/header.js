import { Link } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import Image from "./image"
import PropTypes from "prop-types"
import React from "react"
import "../../styles/main.scss"

const Header = ({ siteTitle }) => (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">
            <Image /> { siteTitle }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <NavDropdown title="Wiki">
                    <NavDropdown.Item as={Link} to="/wiki/characters/">
                        Characters
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/wiki/the_world/">
                        The World
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/wiki/items/">
                        Items
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/wiki/systems/">
                        Systems
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/map/">
                    Map
                </Nav.Link>
                <Nav.Link
                    href="https://github.com/gohanko/teyvat-corner"
                    target="_blank"
                >
                    Github
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
