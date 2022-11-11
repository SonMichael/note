import React, { useEffect } from 'react';
import RoutesHelper from '~src/helpers/routes';
import { RootStateType } from '~src/RootReducer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from './Index';

const Index = ({}) => {
  const isLogged = useSelector(
    (state: RootStateType) => state.loginReducer.isLogged,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      return;
    }
    navigate(RoutesHelper.getNotesRoute());
  }, []);

  return !isLogged ? <Login /> : null;
};

export default Index;
