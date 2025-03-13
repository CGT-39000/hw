import { createContext, useState } from "react";

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("eng");

  const toggleLang = () => {
    setLang((prevMode) => (prevMode === "eng" ? "spa" : "eng"));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
