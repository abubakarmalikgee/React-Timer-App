import React, { useState, useEffect } from "react";

interface TimerProps {
  label: string;
}

const Timer: React.FC<TimerProps> = ({ label }) => {
  const [elapsedTime, setElapsedTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running
  const [, setStartTime] = useState<number>(0); // Track when the timer was started
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | null>(
    null
  ); // Store the timer ID for stopping

  useEffect(() => {
    if (isRunning) {
      // This will run when the timer starts
      const newStartTime =
        Date.now() -
        (elapsedTime.hours * 3600000 +
          elapsedTime.minutes * 60000 +
          elapsedTime.seconds * 1000 +
          elapsedTime.milliseconds);
      setStartTime(newStartTime); // Store the start time

      const newTimerId = setInterval(() => {
        const currentTime = Date.now();
        const totalTime = currentTime - newStartTime;

        const newMilliseconds = totalTime % 1000;
        const newSeconds = Math.floor((totalTime / 1000) % 60);
        const newMinutes = Math.floor((totalTime / (1000 * 60)) % 60);
        const newHours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);

        setElapsedTime({
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
          milliseconds: newMilliseconds,
        });
      }, 10);

      setTimerId(newTimerId);

      return () => clearInterval(newTimerId); // Cleanup on component unmount or when the timer stops
    } else if (!isRunning && timerId) {
      // Stop the timer when not running
      clearInterval(timerId);
      setTimerId(null); // Reset the timer ID
    }
  }, [isRunning, elapsedTime]);

  const padTime = (value: number) => value.toString().padStart(2, "0");
  const padMilliseconds = (value: number) => value.toString().padStart(3, "0");

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setElapsedTime({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 bg-black rounded-lg shadow-md bg-opacity-50">
      <h2 className="text-xl font-bold text-primary">{label}</h2>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max text-gray-200">
        <div className="flex flex-col">
          <span className="font-mono text-5xl">
            {padTime(elapsedTime.hours)}
          </span>
          <span className="text-sm">hours</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-5xl">
            {padTime(elapsedTime.minutes)}
          </span>
          <span className="text-sm">min</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-5xl">
            {padTime(elapsedTime.seconds)}
          </span>
          <span className="text-sm">sec</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-5xl">
            {padMilliseconds(elapsedTime.milliseconds)}
          </span>
          <span className="text-sm">ms</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={startTimer}
          className="btn btn-primary"
          disabled={isRunning}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="btn btn-secondary"
          disabled={!isRunning}
        >
          Stop
        </button>
        <button onClick={resetTimer} className="btn btn-accent">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
