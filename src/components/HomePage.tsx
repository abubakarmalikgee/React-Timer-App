import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import Countdown from "./Countdown";
import Greeting from "./Greeting";
import { useUserContext } from "../hooks/useUserContext";

const HomePage: React.FC = () => {
  const { user } = useUserContext();
  const [birthday, setBirthday] = useState<Date | null>(null);

  useEffect(() => {
    if (user?.dob) {
      setBirthday(new Date(user.dob));
    }
  }, [user]);

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();

  const isNewYear = todayDay === 1 && todayMonth === 0;
  const isBirthday =
    !!birthday &&
    todayDay === birthday.getDate() &&
    todayMonth === birthday.getMonth();

  const targetBirthday = birthday
    ? new Date(
        today.getFullYear() + (today > birthday ? 1 : 0),
        birthday.getMonth(),
        birthday.getDate()
      )
    : null;

  let bgImage = `bg-[url("/default-bg.jpg")] bg-right`;
  if (isBirthday) bgImage = `bg-[url("/birthday-bg.jpg")] bg-center`;
  else if (isNewYear) bgImage = `bg-[url("/new-year-bg.jpg")] bg-center`;

  return (
    <div
      className={`grow h-full w-full flex flex-col gap-4 bg-cover ${bgImage}`}
    >
      <div className="grow max-h-[700px] container h-full w-full pt-12 pb-6 relative flex flex-col justify-between gap-10">
        {/* Top-left greeting */}
        <div className="">
          <Greeting
            name={user?.name || "User"}
            isBirthday={isBirthday!}
            isNewYear={isNewYear}
          />
        </div>

        {/* Center-right timer */}
        <div className="flex sm:justify-center justify-center items-center">
          <Timer label="Timer" />
        </div>

        {/* Bottom-left countdowns */}
        <div className="flex sm:flex-row flex-col sm:items-center items-center justify-start gap-2">
          <Countdown
            targetDate={new Date(today.getFullYear() + 1, 0, 1)}
            label="New Year Countdown"
            isTodayEvent={isNewYear}
          />
          {targetBirthday && (
            <Countdown
              targetDate={targetBirthday}
              label="Birthday Countdown"
              isTodayEvent={isBirthday}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
