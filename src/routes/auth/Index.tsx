import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Note from '~src/routes/auth/note/Index';
import RoutesConstants from '~src/constants/routes';

const Index = () => {
  return (
    <Routes>
      <Route path={RoutesConstants.AUTHENTICATE.NOTES} element={<Note />} />
    </Routes>
  );
};

export default Index;
