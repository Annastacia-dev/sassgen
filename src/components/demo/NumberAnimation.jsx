/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

function NumberAnimation({ targetNumber }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const increment = targetNumber < 100 ? 1 : targetNumber < 1000 ? 10 : 100;
  const duration = targetNumber < 100 ? 110 : targetNumber < 1000 ? 50 : 40;

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < targetNumber) {
        setCurrentNumber((prevNumber) => prevNumber + increment);
      } else {
        clearInterval(interval);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [currentNumber, targetNumber, duration, increment]);

  return <span className="dark:text-white text-black">{currentNumber}</span>;
}

export default NumberAnimation;
