import React from 'react';
// import {Outlet} from 'react-router-dom'
import Container from '../components/Container/Container';
// import AppBar from '../components/AppBar/AppBar';
// import BalanceLine from '../components/BalanceLine/BalanceLine';
import IncomeSpendSection from '../components/IncomeSpendSection/IncomeSpendSection';
function ReportView({ children }) {
  return (
    <>
      {children}
      <h1>ReportView</h1>
      <Container>
        {/* <AppBar /> */}
        {/* <BalanceLine /> */}
        <IncomeSpendSection />
      </Container>
    </>
  );
}

export default ReportView;
