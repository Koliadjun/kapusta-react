import React from 'react';
import { Link } from 'react-router-dom';

import Container from '../../components/Container/Container';
import AppBar from '../../components/AppBar/AppBar';
import BalanceLine from '../../components/BalanceLine/BalanceLine';
import IncomeSpendSection from '../../components/IncomeSpendSection/IncomeSpendSection';

export default function ReportPage({ balance, setBalance }) {
  return (
    <div>
      <Link style={{ color: 'black', margin: 20, fontSize: '20px' }} to="/">
        click me (back to the MainPage)
      </Link>

      <Container>
        <AppBar />
        <BalanceLine balance={balance} />

        <IncomeSpendSection />
      </Container>
    </div>
  );
}
