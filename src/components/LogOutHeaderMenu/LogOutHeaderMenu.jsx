import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import operations from '../../redux/auth/auth-operations'
import sprite from '../../images/svg/sprite.svg'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import users from './users.json'
import Avatar from 'react-avatar';
import shortid from 'shortid';
import s from './LogOutHeaderMenu.module.css'
import Modal from '../Modal/Modal'
import ModalContent from '../ModalContent/ModalContent'


function LogInHeaderMenu({onClickLeftButton, onClickRightButton, onClick},) {
  // const post=  
  const [modal, setModal] = useState(false);
  const {isModalOpen, setIsModalOpen}=useState(false)
  const userId = shortid.generate();
  const viewPort = useWindowDimensions();
  const dispatch = useDispatch()
  const logOut = useSelector(operations.logOut)

  const toggleBtn = () => {
  setModal(prevModal=>!prevModal)
  }

  console.log(logOut);

  const logOutModal = () => {
    dispatch(logOut);

  }

  return (
        <div className={s.userMenu}>
    
      {viewPort.width >= 768 && (
       
        <>
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
           <div className={s.line}>
        {users.map(user => (
          <p className={s.userName} key={userId}>{user.name}</p>))}
     </div> 
      <button className={s.logoutBtn} onClick={toggleBtn}>
        <p className={s.textBtn}>Выйти</p>
      </button>
       
        </>
      )}
      {viewPort.width < 768 &&(
        <>
          <div className={s.userMenu}>
          <Avatar
        Avatar
              className={s.userAvatar}
        size="25"
        
              color={Avatar.getRandomColor('sitebase', [
                'red',
                'green',
                'blue',
                'orange',
              ])}
          />
          <button className={s.iconButton} onClick={toggleBtn}>
              <svg 
              className={s.logOutIcon}
              >
            <use xlinkHref={`${sprite}#icon-logout`}/>
        </svg>
          </button>
         </div>
      </>
      )}
      {modal &&
        <div className={s.hederModalOut }>
          <Modal
            active={isModalOpen}
            setActive={setIsModalOpen}
            onClickLeftButton={logOutModal}
            onClickRightButton={toggleBtn}
            onClose={toggleBtn }
          />
          <ModalContent   
          message={'Вы уверены?'}
          textLeftButton={'да'}
            textRightButton={'нет'} />
            
      </div>
      }
     </div>   
    )
 }

export default LogInHeaderMenu;