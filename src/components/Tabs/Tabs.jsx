import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './Tabs.module.css';
import Summary from 'components/Summary/Summary';
// import IncomeSpendSection from 'components/IncomeSpendSection/IncomeSpendSection';
import Transactionslist from '../Transactionslist/Transactionslist';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import DatePicker from '../DatePicker/Datepicker';
import InputDescriptionProduct from '../InputDescriptionProduct/InputDescriptionProduct';
import InputBalance from '../InputBalance/InputBalance';
import CategoryList from '../CategoryList';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function TabsContainer() {
  const month = useSelector(transactionSelectors.getCurrentMonth);
  const year = useSelector(transactionSelectors.getCurrentYear);
  const day = useSelector(transactionSelectors.getCurrentDay);
  const [inputSpendDesk, setInputSpendDesk] = useState('');
  const [inputSpendSum, setInputSpendSum] = useState('');
  const [inputSpendCategory, setInputSpendCategory] = useState('');
  const dispatch = useDispatch();
  const transactionIncome = useSelector(
    transactionSelectors.getAllIncomePerMonth(month, year),
  );
  const transactionSpend = useSelector(
    transactionSelectors.getAllSpendPerMonth(month, year),
  );
  const transactionSpend1 = useSelector(
    transactionSelectors.getIncomeReportDataPerMonth(month, year),
  );
  console.log(`fuck`, transactionSpend1);
  const onSubmitSpendForm = e => {
    e.preventDefault();
    dispatch(
      transactionOperations.addOneTransaction({
        description: inputSpendDesk,
        sum: inputSpendSum,
        date: `${year}-${month}-${day}`,
        category: 'soda',
        negative: true,
        day,
        month,
        year,
      }),
    );
  };
  const onInputSpendDesk = e => {
    console.log(e.currentTarget.value);
    setInputSpendDesk(e.currentTarget.value);
  };
  const onInputSpendSum = e => {
    setInputSpendSum(e.currentTarget.value);
  };
  const onInputCategory = e => {
    setInputSpendCategory(e.currentTarget.value);
  };
  return (
    <div className={s.container}>
      <Tabs>
        <TabList>
          <Tab>Расход</Tab>
          <Tab>Доход</Tab>
        </TabList>

        <TabPanel>
          <div className={s.dPicker_category_Cont}>
            <div className={s.Dpiker}>
              <DatePicker />
            </div>
            <form onSubmit={onSubmitSpendForm} className={s.input_Cont}>
              <InputDescriptionProduct onChange={onInputSpendDesk} />
              <CategoryList />
              <InputBalance onChange={onInputSpendSum} />
            </form>
            <div className={s.Buttons_cont}>
              <ButtonsBlock onClickLeftButton={onSubmitSpendForm} />
            </div>
          </div>
          <div className={s.trans_Summ_Cont}>
            <div className={s.transactionsCont}>
              <Transactionslist data={transactionSpend} />
            </div>
            {/* <div className={s.sumPK}><Summary /></div> */}
          </div>
        </TabPanel>
        <div className={s.sumTablet}>{/* <Summary /> */}</div>
        <TabPanel>
          <div className={s.dPicker_category_Cont}>
            <DatePicker />
            <div className={s.input_Cont}>
              <InputDescriptionProduct />
              <CategoryList />
              <InputBalance />
            </div>
            <ButtonsBlock />
          </div>
          <div className={s.trans_Summ_Cont}>
            <div className={s.transactionsCont}>
              <Transactionslist data={transactionIncome} />
            </div>
            <div className={s.sumPK}>{/* <Summary /> */}</div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
