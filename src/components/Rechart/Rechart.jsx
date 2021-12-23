import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';
import Container from 'components/Container/Container';

import s from './styles.module.css';

export default function Rechart() {
  // const [data,setData]=useState([])
  const data = [
    {
      name: 'Page A',
      amt: 2400,
    },
    {
      name: 'Page B',
      amt: 7210,
    },
    {
      name: 'Page C',
      amt: 9290,
    },
    {
      name: 'Page D',
      amt: 8790,
    },
    {
      name: 'Page D',
      amt: 6790,
    },
  ];

  const sortedData = data.sort((a, b) => b.amt - a.amt);
  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={width+x}
        y={y - 4}
        fill="#666"
        textAnchor="middle"
        dy={-10}
        fontSize={10} fontColor="var(--main-text-color)"
      >{`${value} грн`}</text>
    );
  };
  const renderCategoryLabel = ({ x, y, name }) => (
    <text x={x} y={y-4} dy={-10} fontSize={10} fontColor="var(--main-text-color)" textAnchor="start">
      {name}
    </text>
  );
  const barSize = () => {
    if (window.screen.width < 768) {
      return 15;
    }
    return;
  };

  return (
    <div className={s.rechartSection}>
      <BarChart
        width={282}
        height={400}
        data={sortedData}
        margin={{ top: 50, right: 15, bottom: 9, left: 15 }}
        layout="vertical"
      >
        <XAxis hide axisLine={false} type="number" />
        <YAxis dataKey="description" type="category" hide />
        <Bar
          dataKey="amt"
          barSize={15}
          radius={[0, 10, 10, 0]}
          label={renderCustomBarLabel}
        >
          <LabelList
            dataKey="description"
            content={renderCategoryLabel}
            fill="#52555F"
          />
        </Bar>
      </BarChart>
    </div>
  );
}
