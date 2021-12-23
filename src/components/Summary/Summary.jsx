import React from 'react';
import s from './Summary.module.css';
import items from './items.json';

export default function Summary({ data }) {
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
          {data.map((item, index) => {
            if (item !== 0) {
              return (
                <tr className={s.tr} key={index}>
                  <td className={s.month}>{items[index]}</td>
                  <td className={s.sum}>{item}</td>
                </tr>
              );
            }
            return null;
          })}
          <tr className={s.empty}>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
