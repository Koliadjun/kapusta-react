import React from 'react';

import users from './users.json'
import Avatar from 'react-avatar';
import shortid from 'shortid';
import s from './LogOutHeaderMenu.module.css'


function LogInHeaderMenu() {
 const userId = shortid.generate();
  return (
        <div className={s.userMenu}>
      <Avatar
              className={s.userAvatar}
              size="32"
              color={Avatar.getRandomColor('sitebase', [
                'red',
                'green',
                'blue',
                'orange',
              ])}
      />
    <div >
        {users.map(user => (
          <p key={userId}>{user.name}</p>))}
     </div> 
      <button className={s.logoutBtn}>
        <p className={s.textBtn}>Выйти</p>
      </button>
        </div>
        
    )
 }

export default LogInHeaderMenu;