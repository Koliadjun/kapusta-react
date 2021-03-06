import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './Tabs.module.css';
import Summary from 'components/Summary/Summary';
import Transactionslist from '../Transactionslist/Transactionslist';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import DatePicker from '../DatePicker/Datepicker';
import InputDescriptionProduct from '../InputDescriptionProduct/InputDescriptionProduct';
import InputCalculator from '../InputCalculator/InputCalculator';
import CategoryList from '../CategoryList';
import { transactionOperations, transactionSelectors } from 'redux/transaction';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import Footer from '../Footer/Footer';

export default function TabsContainer() {
  const month = useSelector(transactionSelectors.getCurrentMonth);
  const year = useSelector(transactionSelectors.getCurrentYear);
  const day = useSelector(transactionSelectors.getCurrentDay);

  const summarySpend = useSelector(
    transactionSelectors.getAllSpendSummary(year),
  );

  const summaryIncome = useSelector(
    transactionSelectors.getAllIncomeSummary(year),
  );

  const [inputSpendDesk, setInputSpendDesk] = useState('');
  const [inputSpendSum, setInputSpendSum] = useState(0);
  // eslint-disable-next-line
  const [inputSpendCategory, setInputSpendCategory] = useState('');
  const [inputIncomeDesk, setInputIncomeDesk] = useState('');
  const [inputIncomeSum, setInputIncomeSum] = useState(0);
  // eslint-disable-next-line
  const [inputIncomeCategory, setInputIncomeCategory] = useState('');
  const dispatch = useDispatch();
  const transactionIncome = useSelector(
    transactionSelectors.getAllIncomePerMonth(month, year),
  );
  const transactionSpend = useSelector(
    transactionSelectors.getAllSpendPerMonth(month, year),
  );

  const onSubmitSpendForm = e => {
    e.preventDefault();
    dispatch(
      transactionOperations.addOneTransaction({
        description: inputSpendDesk,
        sum: Number(inputSpendSum) * 100,
        date: `${day}.${month}.${year}`,
        category: inputSpendCategory,
        negative: true,
        day,
        month,
        year,
      }),
    );
    setInputSpendDesk('');
    setInputSpendSum('');
  };
  const onInputSpendDesk = e => {
    setInputSpendDesk(e.currentTarget.value);
  };
  const onInputSpendSum = e => {
    setInputSpendSum(e);
  };
  // eslint-disable-next-line
  const onInputSpendCategory = data => {
    setInputSpendCategory(data.value);
  };
  const onSubmitIncomeForm = e => {
    e.preventDefault();
    dispatch(
      transactionOperations.addOneTransaction({
        description: inputIncomeDesk,
        sum: Number(inputIncomeSum) * 100,
        date: `${day}.${month}.${year}`,
        category: inputIncomeCategory,
        negative: false,
        day,
        month,
        year,
      }),
    );
    setInputIncomeCategory('');
    setInputIncomeDesk('');
    setInputIncomeSum('');
  };
  const onInputIncomeDesk = e => {
    setInputIncomeDesk(e.currentTarget.value);
  };
  const onInputIncomeSum = e => {
    setInputIncomeSum(e);
  };
  // eslint-disable-next-line
  const onInputIncomeCategory = data => {
    setInputIncomeCategory(data.value);
  };
  return (
    <div className={s.container}>
      <Tabs>
        <TabList>
          <Tab>????????????</Tab>
          <Tab>??????????</Tab>
        </TabList>

        <TabPanel>
          <div className={s.dPicker_category_Cont}>
            <div className={s.Dpiker}>
              <DatePicker />
            </div>
            <form onSubmit={onSubmitSpendForm} className={s.input_Cont}>
              <InputDescriptionProduct
                value={inputSpendDesk}
                onChange={onInputSpendDesk}
              />
              <CategoryList
                categoryType={'?????????????????? ????????????'}
                onSelect={onInputSpendCategory}
              />

              <InputCalculator
                value={inputSpendSum}
                onChange={onInputSpendSum}
              />
            </form>
            <div className={s.Buttons_cont}>
              <ButtonsBlock onClickLeftButton={onSubmitSpendForm} />
            </div>
          </div>
          <div className={s.trans_Summ_Cont}>
            <div className={s.transactionsCont}>
              <Transactionslist data={transactionSpend} />
            </div>
            <div className={s.sumPK}>
              <Summary data={summarySpend} />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className={s.dPicker_category_Cont}>
            <DatePicker />
            <div className={s.input_Cont}>
              <form onSubmit={onSubmitIncomeForm} className={s.input_Cont}>
                <InputDescriptionProduct
                  value={inputIncomeDesk}
                  onChange={onInputIncomeDesk}
                />
                <CategoryList
                  categoryType={'?????????????????? ????????????'}
                  onSelect={onInputIncomeCategory}
                />
                <InputCalculator
                  value={inputIncomeSum}
                  onChange={onInputIncomeSum}
                />
              </form>
            </div>
            <ButtonsBlock onClickLeftButton={onSubmitIncomeForm} />
          </div>
          <div className={s.trans_Summ_Cont}>
            <div className={s.transactionsCont}>
              <Transactionslist data={transactionIncome} />
            </div>
            <div className={s.sumPK}>
              <Summary data={summaryIncome} />
            </div>
          </div>
        </TabPanel>
        <div className={s.sumTablet}>
          <Summary data={summaryIncome} />
        </div>
      </Tabs>
    </div>
  );
}
