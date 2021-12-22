import React from 'react';
import { BarChart, Bar, XAxis, LabelList } from 'recharts';
import Container from 'components/Container/Container';

import s from './styles.module.css';

export default function Rechart() {
  const data = [
    {
      name: 'Page A',
      amt: 2400,
    },
    {
      name: 'Page B',
      amt: 1210,
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
      amt: 790,
    },
  ];

  const sortedData = data.sort((a, b) => b.amt - a.amt);
  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 4}
        fill="#666"
        textAnchor="middle"
        dy={-10}
        
       
      >{`${value} грн`}</text>
    );
  };
  const renderCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10} fontColor='var(--main-text-color)'>
        {value}
    </text>
);
const barSize=()=>{
  if(window.screen.width<768){
    return 15
  }else if(window.screen.width>=768){
    return 38
  }return;
}

  return (
    <div className={s.rechartSection}>
      <BarChart width={282} height={400} data={sortedData} barGap="15" margin={{ top: 50, right: 15, bottom: 9, left: 15 }} >
        <XAxis dataKey="name" axisLine={false} tickLine={false} dy={5}></XAxis>
        <Bar
          dataKey="amt"
          barSize={barSize}
          radius={[10, 10, 0, 0]}
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
