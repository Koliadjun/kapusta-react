import React from 'react';
import CategoryImagesList from 'components/CategoryImages/CategoryImagesList/CategoryImagesList';
import IncomeSpendSection from '../../components/IncomeSpendSection/IncomeSpendSection';

import Container from 'components/Container/Container';
import s from './ReportView.module.css';
import BalanceLine from 'components/BalanceLine/BalanceLine';

const ReportView = ({ name }) => {
  return (
    <section className={s.section}>
      <Container>
        <BalanceLine name={name} />
        <IncomeSpendSection />
        <CategoryImagesList />
      </Container>
    </section>
  );
};

export default ReportView;
