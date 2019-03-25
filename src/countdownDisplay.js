import React from 'react';
import PropTypes from 'prop-types';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';

const CountdownDisplay = ({ timeRemaining }) => (
  <Gradient name="rainbow">
    <BigText text={` ${timeRemaining}`} />
  </Gradient>
);

CountdownDisplay.propTypes = {
  timeRemaining: PropTypes.string.isRequired,
};

export default CountdownDisplay;
