import React from 'react';

import Container from 'components/Container/Container';
// import Datepicker from 'components/DatePicker/Datepicker';
import Tabs from '../components/Tabs/Tabs';
function CommentView() {
  return (
    <>
      <Container>
        {/* <BalanceLine modal={modal} balance={balance} name={name} /> */}
        <div style={{ margin: 20 }}>{/* <Datepicker date={date} /> */}</div>
        <Tabs />
      </Container>
    </>
  );
}

export default CommentView;
