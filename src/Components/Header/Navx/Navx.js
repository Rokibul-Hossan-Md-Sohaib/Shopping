import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navx() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
   
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

        <Nav.Link href="#home">Home</Nav.Link>
       
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">
            <Link to ="wallet">
            Wallet
            </Link>
            
            </NavDropdown.Item>

          <NavDropdown.Item >
          <Link to ="/shoes">
            Shoes
            </Link>
            </NavDropdown.Item>
        
          <NavDropdown.Item href="#action/3.3">
            <Link to ="watch">
            Watch
            </Link>
            </NavDropdown.Item>
          <NavDropdown.Divider />
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navx
