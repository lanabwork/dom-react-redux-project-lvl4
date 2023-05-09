import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

const getLocalStorageItem = (item) => localStorage.getItem(item);

export const AuthProvider = ({ children }) => {
  let [accessToken, setAccessToken] = useState(getLocalStorageItem('accessToken') ?? '');
  let [username, setUsername] = useState(getLocalStorageItem('username') ?? '');

  const setUser = (token, username) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('username', username);
    setAccessToken(token);
    setUsername(username);
  };

  return (
    <AuthContext.Provider value={{ accessToken, username, setUser }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
