import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth';

const RequireAuth = ({ children }) => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let pathName = '/login';
    if (location.pathname === '/signup') pathName = '/signup';
    // eslint-disable-next-line no-unused-expressions
    accessToken ? navigate('/') : navigate(pathName);
  }, [accessToken, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return children;
};

export default RequireAuth;
