import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Color } from 'ink';
import Box from 'ink-box';
import TextInput from 'ink-text-input';

const TimeInput = ({ setTime, setInput }) => {
  const [value, setValue] = useState(``);

  const handleChange = input => {
    setValue(input);
  };

  const handleSubmit = () => {
    if (/^\d+$/.test(value)) {
      setTime(value * 60);
      setInput(true);
    }
  };

  return (
    <Box borderStyle="round" borderColor="magenta" margin={1} padding={1}>
      <Color yellow>CLICT</Color>
      <Color magenta> - </Color>
      <Color cyan>Enter number of minutes: </Color>
      <TextInput value={value} onChange={handleChange} onSubmit={handleSubmit} />
    </Box>
  );
};

TimeInput.propTypes = {
  setTime: PropTypes.func.isRequired,
  setInput: PropTypes.func.isRequired,
};

export default TimeInput;
