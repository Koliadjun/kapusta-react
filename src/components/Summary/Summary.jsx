import React from "react";
import s from './Summary.module.css'
import items from './items.json'

export default function Summary() {
    
    return (
    <div className={s.wrap}>
      <table className={s.reportHistory}>
        <thead>
          <tr className={s.tr}>
            <th className={s.reportHeader} colSpan="3">
              Сводка
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map(x => (
            <tr className={s.tr} key={x.month}>
              <td className={s.month}>{x.month}</td>
              <td className={s.sum}>{x.sum}</td>
            </tr>
          ))}
          <tr className={s.empty}>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}