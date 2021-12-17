import React from 'react';
import s from './IncomeSpendSection.module.css';

export default function IncomeSpendSection() {
  return (
    <div className={s.container}>
      <div className={s.spendContainer}>
        <p className={s.titleSpend}>
          Расходы:<span className={s.valueSpend}>- 18 000.00 грн.</span>
        </p>
      </div>
      <div className={s.incomeContainer}>
        <p className={s.titleIncome}>
          Доходы:<span className={s.valueIncome}>+ 45 000.00 грн.</span>
        </p>
      </div>
    </div>
  );
}
