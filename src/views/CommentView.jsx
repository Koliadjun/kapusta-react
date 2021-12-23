import React from 'react';

import Container from 'components/Container/Container';
import Datepicker from 'components/DatePicker/Datepicker';
import Tabs from '../components/Tabs/Tabs';
import BalanceLine from 'components/BalanceLine/BalanceLine';
import Wrapper from 'components/InitialBalanceFormModal/Wrapper/Wrapper';
import BalanceModal from 'components/InitialBalanceFormModal/Modal/BalanceModal';
import Input from 'components/InitialBalanceFormModal/Input/Input';
import Content from 'components/InitialBalanceFormModal/Content/Content';
function CommentView({ name }) {
  return (
    <>
      <Container>
        <BalanceLine name={name} />
        <div style={{ margin: 20 }}>
          <Datepicker />
        </div>
        <Tabs />
      </Container>
      <BalanceModal>
        <Wrapper>
          <Input />
          <Content />
        </Wrapper>
      </BalanceModal>
    </>
  );
}

export default CommentView;
