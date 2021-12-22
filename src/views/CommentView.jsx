import React from 'react';

import AppBar from '../components/AppBar/AppBar';
// import BalanceLine from '../components/BalanceLine/BalanceLine';
import Container from 'components/Container/Container';
// import Datepicker from 'components/DatePicker/Datepicker';
import Tabs from '../components/Tabs/Tabs';
function CommentView() {
  return (
    <>
      <Container>
        <AppBar />
        {/* <BalanceLine modal={modal} balance={balance} name={name} /> */}
        <div style={{ margin: 20 }}>{/* <Datepicker date={date} /> */}</div>
        <Tabs />
      </Container>
    </>
  );
}

export default CommentView;
