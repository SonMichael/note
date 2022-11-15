import React from 'react';
import { login } from '~src/routes/login/actions/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/login.scss';
import CryptoHelper from '~src/helpers/crypto';
import RoutesHelper from '~src/helpers/routes';

const Index = ({}) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { user_name, password } = document.forms[0];
    const userNameVal = user_name.value;
    const passwordVal = password.value;
    const passwordHash = CryptoHelper.hash(passwordVal);
    const data = await dispatch(
      await login({ user_name: userNameVal, password: passwordHash }),
    );
    if (data.error) {
      alert(data.error.message);
      return;
    }
    navigate(RoutesHelper.getNotesRoute());
  };

  const onRegister = () => {
    navigate(RoutesHelper.getRegisterRoute());
  };

  return (
    <div className="login">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input-user-name"
          name={'user_name'}
          placeholder="user name"
          required={true}
        />
        <input
          className="input-password"
          name={'password'}
          type={'password'}
          placeholder="password"
          required={true}
        />
        <button type={'submit'} className="button">
          Login
        </button>
        <button
          type={'button'}
          onClick={onRegister}
          className="link-register button"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Index;
