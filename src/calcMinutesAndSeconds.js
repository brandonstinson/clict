const calcMinutesAndSeconds = remaining => {
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
  return `${displayMinutes}:${displaySeconds}`;
};

export default calcMinutesAndSeconds;
