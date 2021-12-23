import React from 'react';
import CategoryImagesList from 'components/CategoryImages/CategoryImagesList/CategoryImagesList';
import IncomeSpendSection from '../../components/IncomeSpendSection/IncomeSpendSection';
import BalanceLine from '../../components/BalanceLine/BalanceLine';

import Container from 'components/Container/Container';
import s from './ReportView.module.css';

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
