import React, { useState } from 'react';

import './App.css';

import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';
import Summary from 'components/Summary/Summary';
import BalanceModal from './components/InitialBalanceFormModal/Modal/BalanceModal';
import Content from 'components/InitialBalanceFormModal/Content/Content';

function App() {
  const [modal, setModal] = useState(true);

  return (
    <div>
      {/* <ButtonsBlock />
      <Summary /> */}
      <BalanceModal visible={modal} setVisible={setModal}>
        <Content />
      </BalanceModal>
    </div>
  );
}

export default App;
