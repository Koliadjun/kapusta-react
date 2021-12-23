import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  CartesianGrid,
} from 'recharts';
import PropTypes from 'prop-types';
import s from './styles.module.css';

export default function Rechart({ itemsArray }) {
  const sortedData = itemsArray.sort((a, b) => b.value - a.value);

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    if (window.screen.width < 768) {
      return (
        <text
          x={width + x}
          y={y - 4}
          fill="#666"
          textAnchor="middle"
          dy={-10}
          fontSize={10}
          fontColor="var(--main-text-color)"
        >{`${value} грн`}</text>
      );
    }
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-10}
        fontSize={10}
        fontColor="var(--main-text-color)"
      >{`${value} грн`}</text>
    );
  };
  const renderCategoryLabel = ({ x, y, name, width, height }) => {
    if (window.screen.width < 768) {
      return (
        <text
          x={x}
          y={y - 4}
          dy={-10}
          fontSize={10}
          fontColor="var(--main-text-color)"
          textAnchor="start"
        >
          {name}
        </text>
      );
    }
    return (
      <text
        x={x}
        y={y + height + 20}
        dy={-10}
        fontSize={10}
        fontColor="var(--main-text-color)"
        textAnchor="start"
      >
        {name}
      </text>
    );
  };

  return (
    <div className={s.rechartSection}>
      <BarChart
        width={window.screen.width < 768 ? 282 : 422}
        height={window.screen.width < 768 ? 400 : 580}
        data={sortedData}
        margin={{ top: 50, right: 15, bottom: 15, left: 15 }}
        layout={window.screen.width < 768 ? 'vertical' : 'horizontal'}
      >
        {window.screen.width < 768 ? (
          <>
            <XAxis hide axisLine={false} type="number" />
            <YAxis dataKey="description" type="category" hide />
          </>
        ) : (
          <>
            <YAxis hide axisLine={false} type="number" />
            <XAxis dataKey="description" type="category" hide />
            <CartesianGrid
              vertical={false}
              color="var(--secondary-background-color)"
            />
          </>
        )}

        <Bar
          dataKey="value"
          barSize={window.screen.width < 768 ? 15 : 38}
          radius={window.screen.width < 768 ? [0, 10, 10, 0] : [10, 10, 0, 0]}
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

Rechart.propTypes = {
  itemsArray: PropTypes.array
};