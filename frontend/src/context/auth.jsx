import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

const getLocalStorageItem = (item) => localStorage.getItem(item);

// eslint-disable-next-line react/prop-types
export const AuthProvider = function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(getLocalStorageItem('accessToken') ?? '');
  const [username, setUsername] = useState(getLocalStorageItem('username') ?? '');

  const setUser = (token, name) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('username', name);
    setAccessToken(token);
    setUsername(name);
  };
  const removeUser = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    setAccessToken('');
    setUsername('');
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{
      accessToken, username, setUser, removeUser,
    }}
    >
      { children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
