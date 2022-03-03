import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavB ({entities}) {
  return (

     <Navbar bg="dark" variant="dark">
       <Container>
     <Nav className="me-auto">
     <Nav.Link href='/'>Homepage</Nav.Link>
       <Nav.Link href='/players'>Players</Nav.Link>
       <Nav.Link href='/games'>Games</Nav.Link>
       <Nav.Link href='/messages'>Messages</Nav.Link>
      <Nav.Link href='/membership'>Membership</Nav.Link>
     </Nav>
     </Container>
   </Navbar>

  )
}


export default NavB;