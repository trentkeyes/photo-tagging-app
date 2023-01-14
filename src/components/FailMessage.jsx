import { useEffect } from 'react';

export const FailMessage = ({ fail }) => {
  let classes = 'bg-red p-2 mt-1 font-bold text-center rounded';
  useEffect(() => {
    setTimeout(() => {
      classes += 'hidden';
    }, 1000);
  }, []);

  return <div className={classes}>Try again!</div>;
};
