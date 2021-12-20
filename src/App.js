import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReportPage from './view/ReportPage/ReportPage';
import MainPage from './view/MainPage/MainPage';

function App() {
  const [balance, setBalance] = useState(0);
  const [modal, setModal] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/report"
            element={<ReportPage balance={balance} setBalance={setBalance} />}
          />
          <Route
            path="/"
            element={
              <MainPage
                modal={modal}
                setModal={setModal}
                balance={balance}
                setBalance={setBalance}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
