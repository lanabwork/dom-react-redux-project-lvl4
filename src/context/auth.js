import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

const getToken = () => localStorage.getItem('token');

export const AuthProvider = ({ children }) => {
  let [accessToken, setAccessToken] = useState(getToken() ?? '');

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};