import React from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap'
import { BiCart } from 'react-icons/bi'

const Header = () => {
    return (
        <div>
<     Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand style={{ color: 'white' }} href="#">SuperaGames</Navbar.Brand>
        <Navbar.Toggle style={{ color: 'white' }} aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ color: 'white' }} id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={{ color: 'white' }} href="#action1">Loja</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#action2">Login/Cadastro</Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#action2">Meus Pedidos</Nav.Link>
            
          </Nav>


          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Procurar Jogo"
              className="me-2"
              aria-label="Search"
              style={{textAlign: 'center'}}
            />
            <Nav.Link>
            <BiCart style={{ marginLeft: '10px' }} size="3rem"/>
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}

export default Header;