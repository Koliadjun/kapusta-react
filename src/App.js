import './App.css';

import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import AppBar from 'components/AppBar/AppBar';
import Summary from 'components/Summary/Summary';
import CategoryImages from './components/CategoryImages';

function App() {
  return (
    <div>
      <AppBar />
      <ButtonsBlock />
      <Summary />
      <CategoryImages />
    </div>
  );
}

export default App;
