import React from 'react';

import users from './users.json'
import Avatar from 'react-avatar';


function LogInHeaderMenu() {
 
  return (
        <div>
            <Avatar
              size="32"
              color={Avatar.getRandomColor('sitebase', [
                'red',
                'green',
                'blue',
                'orange',
              ])}
            />
            <p>UserName</p>
            <button>Выйти</button>
        </div>
        
    )
 }

export default LogInHeaderMenu;