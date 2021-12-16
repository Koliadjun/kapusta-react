import React from 'react';
import axios from 'axios';

function LogoutButton({ token }) {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  const onLogoutButtonClick = async () => {
    try {
      const response = await axios.get(
        'https://kapusta-api-iteam.herokuapp.com/api/auth/logout',
      );
      console.log(response);
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return token ? (
    <div>
      <button onClick={onLogoutButtonClick}>Logout</button>
    </div>
  ) : null;
}

export default LogoutButton;
