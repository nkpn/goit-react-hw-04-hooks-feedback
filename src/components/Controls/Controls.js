import React from 'react';
import style from './Controls.module.css';
import PropTypes from 'prop-types';

const Controls = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={style.Control__list}>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              onClick={onLeaveFeedback}
              className={style.Control__button}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Controls.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Controls;
