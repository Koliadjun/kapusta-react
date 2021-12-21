import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
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
      }
  ];
  
  const sortedData=data.sort((a,b)=>b.amt-a.amt);
  
  const renderCustomBarLabel = ({ payload, x, y, width, height, name }) => {
    return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${name}`}</text>;
  };

  return (
   <ResponsiveContainer width='100%' height={282}>
        <BarChart width={485} height={282} data={sortedData}>
        <Bar dataKey="amt" fill="#8884d8" barSize={15} label={renderCustomBarLabel} radius={[10,10,0, 0]}/>
      </BarChart>
   </ResponsiveContainer>
     
   
  );
}
