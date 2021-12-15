import './App.css';
import RegistrationForm from './components/RegistrationForm'
import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import AppBar from 'components/AppBar/AppBar';
import Summary from 'components/Summary/Summary';

function App() {
  return (
    <div>
      <RegistrationForm />
      <AppBar />
      <ButtonsBlock />
      <Summary />
    </div>
  );
}

export default App;
