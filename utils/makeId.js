import { useState, useEffect } from 'react';

export const makeId = (length) => {
  const [randomNumber, setRandomNumber] = useState(undefined);
  let result = '';

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  useEffect(() => {
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      setRandomNumber(result);
    }
  }, []);
  return randomNumber;
};
