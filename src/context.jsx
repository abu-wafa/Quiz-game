import { createContext, useContext, useState } from "react";
import getQuestions from "./data/api";
const AppContext = createContext();
getQuestions();

function AppProvider({ children }) {
  const data = localStorage.getItem("cachedQuestions")
    ? JSON.parse(localStorage.getItem("cachedQuestions"))
    : [""];
  const [questions, setQuestions] = useState(data);
  return (
    <AppContext.Provider value={{ questions }}>{children}</AppContext.Provider>
  );
}
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider };
