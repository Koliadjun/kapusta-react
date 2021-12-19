import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ReportPage from './view/ReportPage/ReportPage';
import MainPage from './view/MainPage/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/report" element={<ReportPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
