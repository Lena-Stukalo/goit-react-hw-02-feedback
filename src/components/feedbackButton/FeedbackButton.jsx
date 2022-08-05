import React from 'react';
import PropTypes from 'prop-types';

const FeedbackButton = ({ reactions, onButtonClick }) => {
  return reactions.map(reaction => {
    return (
      <button type="button" name={reaction} onClick={onButtonClick}>
        {reaction}
      </button>
    );
  });
};

FeedbackButton.propTypes = {
  reactions: PropTypes.arrayOf(PropTypes.string),
  onButoonClick: PropTypes.func,
};

export default FeedbackButton;