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

export default function TabsContainer() {
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
            <div className={s.input_Cont}>
              <InputDescriptionProduct />
              <CategoryList />
              <InputBalance />
            </div>
            <div className={s.Buttons_cont}>
              <ButtonsBlock />
            </div>
          </div>
          <div className={s.trans_Summ_Cont}>
            <div className={s.transactionsCont}>
              <Transactionslist />
            </div>
            <div className={s.sumPK}>{/* <Summary /> */}</div>
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
              <Transactionslist />
            </div>
            <div className={s.sumPK}>{/* <Summary /> */}</div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
