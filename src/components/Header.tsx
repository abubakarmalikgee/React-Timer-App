import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useUserContext } from "../hooks/useUserContext";

const Header: React.FC = () => {
  const { user, setUser } = useUserContext();
  const handleBackToRegister = () => {
    localStorage.removeItem("timer-user");
    setUser(null);
  };

  return (
    <header className="w-full bg-black bg-opacity-30 backdrop-blur-sm shadow-lg absolute top-0 left-0 z-50">
      <nav className="container flex items-center justify-end p-4 h-full">
        <button
          className="text-lg sm:text-2xl flex items-center gap-2 text-blue-100 hover:text-blue-500 transition duration-300"
          onClick={handleBackToRegister}
        >
          {user ? <FaArrowLeft /> : null}
          <h1 className="text-xl sm:text-2xl font-semibold text-blue-100">
            {user ? "Register Again" : "Register Please"}
          </h1>
        </button>
      </nav>
    </header>
  );
};

export default Header;
