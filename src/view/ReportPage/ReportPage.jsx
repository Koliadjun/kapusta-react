import React from 'react';
import { Link } from 'react-router-dom';

export default function ReportPage() {
  return (
    <div>
      <h1>ReportPage</h1>
      <Link style={{ color: 'black', margin: 20, fontSize: '20px' }} to="/">
        click me (back to the MainPage)
      </Link>
    </div>
  );
}
