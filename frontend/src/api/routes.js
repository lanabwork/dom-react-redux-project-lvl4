const prefix = '/api/v1';

const routes = {
  loginPath: () => [prefix, 'login' ].join('/'),
  signupPath: () => [prefix, 'signup' ].join('/'),
  dataPath: () => [prefix, 'data' ].join('/'),
};

export default routes;
