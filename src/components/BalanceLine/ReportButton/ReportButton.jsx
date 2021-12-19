import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ReportButton.module.css';
import { ReactComponent as ReportIcon } from '../../../images/svg/chart.svg';

export default function ReportButton() {
  return (
    <div className={styles.containerReportButton}>
      <Link className={styles.link} to="/report">
        Перейти к отчетам
      </Link>
      <ReportIcon className={styles.icon} width="20px" height="20px" />
    </div>
  );
}
