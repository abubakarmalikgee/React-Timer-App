import React from "react";

interface GreetingProps {
  name: string;
  isBirthday: boolean;
  isNewYear: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ name, isBirthday, isNewYear }) => {
  let messageLine1 = `Hey! ${name}`;
  let messageLine2 = `Welcome to our website`;

  if (isBirthday) {
    messageLine1 = `Hey! ${name}`;
    messageLine2 = `Happy Birthday to you! 🎂`;
  } else if (isNewYear) {
    messageLine1 = `Hey! ${name}`;
    messageLine2 = `Happy New Year! 🎆`;
  }

  return (
    <div className="p-4 sm:p-6">
      <h2
        className={`text-xl sm:text-3xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]  ${
          isBirthday ? "text-purple-100" : isNewYear ? "text-sky-500" : "text-white"
        }`}
      >
        {messageLine1}
      </h2>
      <h3
        className={`text-2xl sm:text-4xl md:text-5xl font-bold text-gray-200 mt-2 drop-shadow-[0_3px_5px_rgba(255,255,255,0.8)] ${
          isBirthday ? "text-gray-800" : isNewYear ? "text-gray-900" : "text-white"
        }`}
      >
        {messageLine2}
      </h3>
    </div>
  );
};

export default Greeting;
