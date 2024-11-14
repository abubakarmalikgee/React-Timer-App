import { createContext, useState, ReactNode, FC } from "react";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export interface User {
  name: string;
  dob: Date;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<AuthContextType | null>(null);

interface UserContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(
    localStorage.getItem("timer-user")
      ? JSON.parse(localStorage.getItem("timer-user") as string)
      : null
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
