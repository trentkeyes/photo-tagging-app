import { useStopwatch } from 'react-timer-hook';

export const Timer = ({ winTime }) => {
  const { seconds, minutes } = useStopwatch({ autoStart: true });

  const timer = !winTime ? (
    <p>
      {minutes > 0 && <span>{minutes}:</span>}
      {seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}
    </p>
  ) : (
    <p>
      {winTime.minutes > 0 && <span>{winTime.minutes}:</span>}
      <span>{winTime.seconds}</span>
    </p>
  );

  return (
    <div className="py-1 px-2 text-4xl text-white bg-tarantino-bg bg-opacity-60 rounded shadow-md">
      {timer}
    </div>
  );
};
