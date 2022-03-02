import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavB ({entities, onLoad}) {
  return (

     <Navbar bg="dark" variant="dark">
       <Container>
     <Navbar.Brand><Link to="/">Homepage</Link></Navbar.Brand>
     <Nav className="me-auto">
       <Nav.Link onClick={ () => onLoad(entities.players)}>Players</Nav.Link>
       <Nav.Link onClick={ () => onLoad(entities)}>Games</Nav.Link>
       <Nav.Link onClick={ () => onLoad(entities)}>Messages</Nav.Link>
      <Nav.Link onClick={ () => onLoad(entities)}>Membership</Nav.Link>
     </Nav>
     </Container>
   </Navbar>

  )
}


export default NavB;