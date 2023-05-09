import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth'

const RequireAuth = ({ children }) => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    accessToken ? navigate('/') : navigate('/login');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return children;
};

export default RequireAuth;
