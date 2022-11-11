import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '~src/routes/login/Index';
import RoutesConstants from '~src/constants/routes';

function Index() {
  return (
    <Routes>
      <Route path={RoutesConstants.NOTES} element={<Login />} />
      <Route path={RoutesConstants.LOGIN} element={<Login />} />
      <Route path={RoutesConstants.HOME} element={<Login />} />
    </Routes>
  );
}

export default Index;
