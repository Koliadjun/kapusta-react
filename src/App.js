import './App.css';

import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import AppBar from 'components/AppBar/AppBar';
import Summary from 'components/Summary/Summary';

function App() {
  return (
    <div>
      <AppBar />
      <ButtonsBlock />
      <Summary />
    </div>
  );
}

export default App;
