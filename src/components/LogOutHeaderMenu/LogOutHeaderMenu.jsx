import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authOperations, authSelectors } from '../../redux/auth';
import sprite from '../../images/svg/sprite.svg';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import users from './users.json';
import Avatar from 'react-avatar';
import shortid from 'shortid';
import s from './LogOutHeaderMenu.module.css';
import Modal from '../Modal/Modal';
import ModalContent from '../ModalContent/ModalContent';
// import ButtonsBlock from '../ButtonsBlock/ButtonsBlock'

function LogInHeaderMenu() {
  const name = useSelector(authSelectors.getName);
  const [modal, setModal] = useState(false);
  // const {modalActive, setModalActive}=useState(false)
  const userId = shortid.generate();
  const viewPort = useWindowDimensions();
  const dispatch = useDispatch();

  const toggleBtn = () => {
    setModal(prevModal => !prevModal);
  };
  const logOutModal = () => {
    dispatch(authOperations.logOut());
    toggleBtn();
  };

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
              <p className={s.userName} key={userId}>
                {name}
              </p>
            ))}
          </div>
          <button className={s.logoutBtn} onClick={toggleBtn}>
            <p className={s.textBtn}>Выйти</p>
          </button>
        </>
      )}
      {viewPort.width < 768 && (
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
              <svg className={s.logOutIcon}>
                <use xlinkHref={`${sprite}#icon-logout`} />
              </svg>
            </button>
          </div>
        </>
      )}
      {modal && (
        <div className={s.hederModalOut}>
          <Modal active={modal} setActive={setModal}>
            <ModalContent
              message={'Вы уверены?'}
              textLeftButton={'да'}
              textRightButton={'нет'}
              onClickRightButton={toggleBtn}
              onClickLeftButton={logOutModal}
            />
          </Modal>
        </div>
      )}
    </div>
  );
}

export default LogInHeaderMenu;
