import React from 'react';
import { authOperations } from '../../redux/auth';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
// import {authSelectors} from '../../redux/auth'

function LogoutButton() {
  const dispatch = useDispatch();
  const onLogoutButtonClick = async () => {
    dispatch(authOperations.logOut());
  };
  return (
    <div>
      <button onClick={onLogoutButtonClick}>Logout</button>
    </div>
  );
}

export default LogoutButton;
