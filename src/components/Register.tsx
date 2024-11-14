import React, { useState } from "react";
import { useUserContext } from "../hooks/useUserContext";
import { User } from "../context/UserContext";

const Register: React.FC = () => {
  const { setUser } = useUserContext();

  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !dob) {
      setError("Both fields are required!");
      return;
    }

    const userData: User = { name, dob: new Date(dob) };
    localStorage.setItem("timer-user", JSON.stringify(userData));

    setUser(userData);
  };

  return (
    <div className="grow w-full flex items-center justify-center bg-gray-100 px-3">
      <div className="w-full container max-w-4xl rounded-lg shadow-lg flex bg-white">
        {/* Left side Image */}
        <div
          className="w-1/2 bg-cover bg-center rounded-l-lg sm:block hidden"
          style={{ backgroundImage: "url('/register-bg.jpg')" }}
        ></div>

        {/* Right side Form */}
        <div className="sm:w-1/2 w-full p-8">
          <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
            Register
          </h2>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Date of Birth Field */}
            <div className="mb-6">
              <label
                htmlFor="dob"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
