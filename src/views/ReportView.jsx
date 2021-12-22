import Datepicker from 'components/DatePicker/Datepicker';
import { ReduxTest } from 'components/reduxTest/ReduxTest';
import React from 'react';

import Container from '../components/Container/Container';
import AppBar from '../components/AppBar/AppBar';
import BalanceLine from '../components/BalanceLine/BalanceLine';
import IncomeSpendSection from '../components/IncomeSpendSection/IncomeSpendSection';
import { useSelector } from 'react-redux';

export default function ReportPage({ balance, modal, name }) {
  return (
    <div>
      <Container>
        <AppBar />
        <BalanceLine modal={modal} balance={balance} name={name} />
        <IncomeSpendSection />
      </Container>
    </div>
  );
}
