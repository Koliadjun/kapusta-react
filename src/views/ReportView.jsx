import React from 'react';
import Container from '../components/Container/Container';
import BalanceLine from 'components/BalanceLine/BalanceLine';
import IncomeSpendSection from '../components/IncomeSpendSection/IncomeSpendSection';

function ReportView({ name }) {
  return (
    <>
      <Container>
        <BalanceLine name={name} />
        <IncomeSpendSection />
      </Container>
    </>
  );
}

export default ReportView;
