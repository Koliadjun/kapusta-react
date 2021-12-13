import './App.css';

import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import Summary from 'components/Summary/Summary';
import CategoryList from 'components/CategoryList';

function App() {
  return (
    <div>
      <ButtonsBlock />
      <Summary />
      <CategoryList/>
    </div>
  );
}

export default App;
