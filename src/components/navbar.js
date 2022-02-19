import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavB ({entities, onEdit}) {
  return (<>

     <Navbar bg="dark" variant="dark">
       <Container>
     <Navbar.Brand onClick={<Link className="link" to="/"></Link>}>Homepage</Navbar.Brand>
     <Nav className="me-auto">
       <Nav.Link onClick={ () => onEdit(entities)}>Players</Nav.Link>
       <Nav.Link onClick={ () => onEdit(entities)}>Games</Nav.Link>
       <Nav.Link onClick={ () => onEdit(entities)}>Messages</Nav.Link>
      <Nav.Link onClick={ () => onEdit(entities)}>Membership</Nav.Link>
     </Nav>
     </Container>
   </Navbar>
  </>
  )
}


export default NavB;