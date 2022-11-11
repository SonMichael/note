import React, { useEffect } from 'react';
import RoutesHelper from '~src/helpers/routes';
import { RootStateType } from '~src/RootReducer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Routes from './Index';

const Index = ({}) => {
  const isLogged = useSelector(
    (state: RootStateType) => state.loginReducer.isLogged,
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      return;
    }
    navigate(RoutesHelper.getLoginRoute());
  }, []);

  return isLogged ? <Routes /> : null;
};

export default Index;
