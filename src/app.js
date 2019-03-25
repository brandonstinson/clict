import React, { useState, useEffect } from 'react';

import TimeInput from './timeInput';
import CountdownDisplay from './countdownDisplay';
import runCommand from './runCommand';
import calcMinutesAndSeconds from './calcMinutesAndSeconds';

const App = () => {
  const [inputReceived, setInputReceived] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(() => {
    let counter;

    const tick = () => {
      if (count === 0) {
        runCommand(`say 'times up'`);
        clearInterval(counter);
        return;
      }
      setCount(count - 1);
    };

    counter = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(counter);
    };
  });

  return (
    <>
      <TimeInput setTime={setCount} setInput={setInputReceived} />
      {inputReceived ? <CountdownDisplay timeRemaining={calcMinutesAndSeconds(count)} /> : null}
    </>
  );
};

export default App;
