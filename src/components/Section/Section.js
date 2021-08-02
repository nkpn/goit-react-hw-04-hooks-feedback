import React from 'react';
import PropTypes from 'prop-types';
import style from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={style.h1}>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
