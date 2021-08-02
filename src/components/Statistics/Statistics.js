import React from 'react';
import s from './Statistics.module.css';
import StatisticItem from 'components/StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={s.Stat__list}>
        <StatisticItem label="good" value={good} />
        <StatisticItem label="neutral" value={neutral} />
        <StatisticItem label="bad" value={bad} />
        <StatisticItem label="total" value={total} />
        <StatisticItem
          label="Positive feedback"
          value={positivePercentage}
          symbol="%"
        />
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
