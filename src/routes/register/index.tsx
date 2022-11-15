import React from 'react';
import { register } from '~src/routes/register/actions/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/register.scss';
import CryptoHelper from '~src/helpers/crypto';
import RoutesHelper from '~src/helpers/routes';

const Index = ({}) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { user_name, password, password_confirmation } = document.forms[0];
    const userNameVal = user_name.value;
    const passwordVal = password.value;
    const passwordConfirmationVal = password_confirmation.value;
    const passwordHash = CryptoHelper.hash(passwordVal);
    const passwordConfirmationHash = CryptoHelper.hash(passwordConfirmationVal);
    if (passwordHash !== passwordConfirmationHash) {
      alert('Password must be the same');
      return;
    }
    const data = await dispatch(
      await register({
        user_name: userNameVal,
        password: passwordHash,
        password_confirmation: passwordConfirmationHash,
      }),
    );
    if (data.error) {
      alert(data.error.message);
      return;
    }
    alert('Register success');
    navigate(RoutesHelper.getLoginRoute());
  };

  const onLogin = () => {
    navigate(RoutesHelper.getLoginRoute());
  };

  return (
    <div className="register">
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
        <input
          className="input-password"
          name={'password_confirmation'}
          type={'password'}
          placeholder="password confirmation"
          required={true}
        />
        <button type={'submit'} className="button">
          Register
        </button>
        <button
          type={'button'}
          onClick={onLogin}
          className="link-register button"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Index;
