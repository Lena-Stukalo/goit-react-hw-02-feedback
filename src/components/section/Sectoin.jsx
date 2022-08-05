import React from 'react';
import PropTypes from 'prop-types';
import FeedbackButton from 'components/feedbackButton/FeedbackButton';
import Statistics from 'components/statistics/Statistics';

const Section = ({
  title,
  good,
  netrual,
  bad,
  total,
  positivePercentage,
  reactions,
  onButtonClick,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <FeedbackButton
        reactions={reactions}
        onButtonClick={onButtonClick}
      ></FeedbackButton>
      <Statistics
        good={good}
        netrual={netrual}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
      ></Statistics>
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  reactions: PropTypes.arrayOf(PropTypes.string),
  onButoonClick: PropTypes.func,
  good: PropTypes.number,
  netrual: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Section;
