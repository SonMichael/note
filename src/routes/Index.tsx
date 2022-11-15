import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '~src/routes/login/Middleware';
import Register from '~src/routes/register/Index';
import RoutesConstants from '~src/constants/routes';
import AuthRoutes from '~src/routes/auth/Middleware';

function Index() {
  return (
    <Routes>
      <Route
        path={`${RoutesConstants.AUTHENTICATE.PREFIX}/*`}
        element={<AuthRoutes />}
      />
      <Route path={RoutesConstants.REGISTER} element={<Register />} />
      <Route path={RoutesConstants.LOGIN} element={<Login />} />
      <Route path={RoutesConstants.HOME} element={<Login />} />
    </Routes>
  );
}

export default Index;
