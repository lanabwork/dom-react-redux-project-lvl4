import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/auth.js';

const RequireAuth = ({ children }) => {
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    accessToken ? navigate('/') : navigate('/login');
  },[]);

  return children;
};

export default RequireAuth;