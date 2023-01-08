import { useStopwatch } from 'react-timer-hook';

export const Timer = ({ winTime }) => {
  const { seconds, minutes, start, pause } = useStopwatch({ autoStart: true });

  const timer = !winTime ? (
    <p>
      {minutes > 0 && <span>{minutes}:</span>}
      <span>{seconds}</span>
    </p>
  ) : (
    <p>
      {winTime.minutes > 0 && <span>{winTime.minutes}:</span>}
      <span>{winTime.seconds}</span>
    </p>
  );

  return <div className="text-3xl">{timer}</div>;
};
