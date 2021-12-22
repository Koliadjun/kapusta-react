import React, { useState } from 'react';

import AppBar from '../components/AppBar/AppBar';
import BalanceLine from '../components/BalanceLine/BalanceLine';
import Container from 'components/Container/Container';
import Datepicker from 'components/DatePicker/Datepicker';
import Tabs from '../components/Tabs/Tabs';
function MainPage({
  balance,
  setBalance,
  modal,
  setModal,
  name,
  date,
  month,
  year,
  onSelectedDate,
}) {
  // const data = useSelector(transactionSelectors.getAllIncomeSummary);
  return (
    <>
      <Tabs />
      <Container>
        <AppBar />
        <BalanceLine modal={modal} balance={balance} name={name} />
        <div style={{ margin: 20 }}>
          <Datepicker date={date} />
        </div>
      </Container>
    </>
  );
}
export default MainPage;
