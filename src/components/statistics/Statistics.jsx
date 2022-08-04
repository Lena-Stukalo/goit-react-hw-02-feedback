import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification/Notification';

const Statistics = ({ good, netrual, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Netrual:{netrual}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Feedback:{positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  netrual: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
