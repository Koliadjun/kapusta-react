import Datepicker from 'components/DatePicker/Datepicker';
import { ReduxTest } from 'components/reduxTest/ReduxTest';
import React from 'react';
// import {Outlet} from 'react-router-dom'

function ReportView({ children }) {
  return (
    <div>
      {children}
      <h1>ReportView</h1>
      <ReduxTest />
      <Datepicker />
    </div>
  );
}

export default ReportView;
