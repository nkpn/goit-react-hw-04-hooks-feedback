import React from 'react';
import PropTypes from 'prop-types';
import style from './StatisticItem.module.css';

const StatisticItem = ({ label, value, symbol }) => {
  return (
    <li className={style.Li__item}>
      {label} : {value} {symbol}
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default StatisticItem;
