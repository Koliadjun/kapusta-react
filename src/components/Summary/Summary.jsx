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
          {items.map(item => (
            <tr className={s.tr} key={item.month}>
              <td className={s.month}>{item.month}</td>
              <td className={s.sum}>{item.sum}</td>
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