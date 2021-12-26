import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

import Container from 'components/Container/Container';
// import Datepicker from 'components/DatePicker/Datepicker';
import Tabs from '../../components/Tabs/Tabs';
import BalanceLine from 'components/BalanceLine/BalanceLine';
import Wrapper from 'components/InitialBalanceFormModal/Wrapper/Wrapper';
import BalanceModal from 'components/InitialBalanceFormModal/Modal/BalanceModal';
import Input from 'components/InitialBalanceFormModal/Input/Input';
import Content from 'components/InitialBalanceFormModal/Content/Content';
import s from './CommentView.module.css';

function CommentView({ name }) {
  const {pathname} = useLocation()
  useEffect(() => {
    if(pathname.length < 10)  localStorage.setItem("navigateTo", pathname)
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.section}>
      <Container>
        <BalanceLine name={name} />

        <Tabs />
      </Container>
      <BalanceModal>
        <Wrapper>
          <Input />
          <Content />
        </Wrapper>
      </BalanceModal>
    </div>
  );
}

export default CommentView;
