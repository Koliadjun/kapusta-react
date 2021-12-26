import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import CategoryImagesList from 'components/CategoryImages/CategoryImagesList/CategoryImagesList';
import IncomeSpendSection from '../../components/IncomeSpendSection/IncomeSpendSection';
import BalanceLine from '../../components/BalanceLine/BalanceLine';

import Container from 'components/Container/Container';
import s from './ReportView.module.css';

const ReportView = ({ name }) => {
  const {pathname} = useLocation()
  useEffect(() => {
    if(pathname.length < 10)  localStorage.setItem("navigateTo", pathname)
    // eslint-disable-next-line
  }, []);
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
