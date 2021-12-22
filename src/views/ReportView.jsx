import React from 'react';

import Container from '../components/Container/Container';
import AppBar from '../components/AppBar/AppBar';
import BalanceLine from '../components/BalanceLine/BalanceLine';
import IncomeSpendSection from '../components/IncomeSpendSection/IncomeSpendSection';

export default function ReportPage({
  balance,
  modal,
  name,
  month,
  setMonth,
  year,
  setYear,
}) {
  return (
    <div>
      <Container>
        <AppBar />
        <BalanceLine
          modal={modal}
          balance={balance}
          name={name}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />

        <IncomeSpendSection />
      </Container>
    </div>
  );
}
