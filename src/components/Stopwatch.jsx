import React, { useEffect, useState } from 'react';
import './Stopwatch.css';

const Stopwatch = ({ timeLeft }) => {
  const [time, setTime] = useState(timeLeft);

  useEffect(() => {
    setTime(timeLeft);
  }, [timeLeft]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    if (time <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch">
      {formatTime(time)}
    </div>
  );
};

export default Stopwatch;
