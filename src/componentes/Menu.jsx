import { NavLink, Outlet} from "react-router"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Menu = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink className="navbar-brand" exact="true" to="/">Aula 17 do 09</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link active" exact="true" to="/">Home</NavLink>                                          
                            <NavLink className="nav-link active" exact="true" to="/sobre">Sobre...</NavLink>
                            <NavLink className="nav-link active" exact="true" to="/categoria">Categoria</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default Menu;