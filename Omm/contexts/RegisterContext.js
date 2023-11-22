import { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function RegisterContext({ children }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    name: "",
    tel: "",
    email: "",
  });
  return (
    <RegisterContext.Provider value={{ userData, setUserData }}>
      {children}
    </RegisterContext.Provider>
  );
}
