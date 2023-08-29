import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/auth';

function Header() {
  const { t } = useTranslation();
  const { accessToken, removeUser } = useAuth();

  const logout = () => {
    removeUser();
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm w-100">
      <Container>
        <Link className="navbar-brand" to="/">
          Hexlet Chat
        </Link>
        {accessToken && <Button onClick={logout}>{t('logoutButton')}</Button>}
      </Container>
    </Navbar>
  );
}

export default Header;
