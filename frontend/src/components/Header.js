import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="white" variant="light" expand="lg" className='shadow-sm w-100'>
    <Container>
      <Navbar.Brand href="/">React Chat</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Header;
