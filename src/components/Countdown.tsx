import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  label: string;
  isTodayEvent: boolean;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  label,
  isTodayEvent,
}) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return {
      days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((difference / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((difference / (1000 * 60)) % 60), 0),
      seconds: Math.max(Math.floor((difference / 1000) % 60), 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timerId = setInterval(() => setTimeLeft(calculateTimeLeft), 1000);
    return () => clearInterval(timerId);
  }, [targetDate]);

  const padTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center justify-start space-y-2 p-3 bg-black rounded-lg shadow-md bg-opacity-40 max-w-[250px]">
      <h2 className="text-lg font-bold text-orange-200">{label}</h2>
      <div className="grid grid-flow-col gap-3 sm:gap-5 text-center auto-cols-max text-gray-200">
        {["days", "hours", "minutes", "seconds"].map((unit, i) => {
          if (isTodayEvent) {
            return (
              <div key={unit} className="flex flex-col items-center">
                <span className="font-mono text-2xl sm:text-2xl font-semibold">
                  00
                </span>
                <span className="text-xs sm:text-sm">{unit}</span>
              </div>
            );
          } else {
            return (
              <div key={unit} className="flex flex-col items-center">
                <span className="font-mono text-2xl sm:text-2xl font-semibold">
                  {padTime(Object.values(timeLeft)[i])}
                </span>
                <span className="text-xs sm:text-sm">{unit}</span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Countdown;
