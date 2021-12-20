import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import s from './Tabs.module.css';
import Summary from 'components/Summary/Summary';
import IncomeSpendSection from 'components/IncomeSpendSection/IncomeSpendSection';

export default function TabsContainer() {
  return (
    <div className={s.container}>
      <Tabs>
        <TabList>
          <Tab>Расход</Tab>
          <Tab>Доход</Tab>
        </TabList>

        <TabPanel>
          <IncomeSpendSection />
        </TabPanel>
        <TabPanel>
          <Summary />
        </TabPanel>
      </Tabs>
    </div>
  );
}
