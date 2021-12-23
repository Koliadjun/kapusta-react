import React from 'react';
import { useSelector } from 'react-redux';
import { transactionSelectors } from 'redux/transaction';
import s from './IncomeSpendSection.module.css';

export default function IncomeSpendSection() {
  const month = useSelector(transactionSelectors.getCurrentMonth);
  const year = useSelector(transactionSelectors.getCurrentYear);
  const totalIncome = useSelector(
    transactionSelectors.getIncomeSummaryPerMonth(month, year),
  );
  const totalSpend = useSelector(
    transactionSelectors.getIncomeSummaryPerMonth(month, year),
  );
  return (
    <div className={s.container}>
      <div className={s.spendContainer}>
        <p className={s.titleSpend}>
          Расходы:
          <span className={s.valueSpend}>- {totalSpend}грн.</span>
        </p>
      </div>
      <div className={s.incomeContainer}>
        <p className={s.titleIncome}>
          Доходы:<span className={s.valueIncome}>+ {totalIncome} грн.</span>
        </p>
      </div>
    </div>
  );
}
