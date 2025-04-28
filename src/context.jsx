import { createContext, useContext, useState } from "react";
import getQuestions from "./data/api";
const AppContext = createContext();
getQuestions();

function AppProvider({ children }) {
  // get data from local storage
  // if data is not present, fetch from api and set to local storage
  const data = localStorage.getItem("cachedQuestions")
    ? JSON.parse(localStorage.getItem("cachedQuestions"))
    : [""];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // create an object to hold the Quiz data
  let quizData = {
    allQuestions: [],
    options: [],
    correctAnswer: [],
  };
  console.log("score : ", score);

  data.forEach((element) => {
    quizData.allQuestions.push(element.question);
    quizData.options.push([
      ...element.incorrect_answers,
      element.correct_answer,
    ]);
    quizData.correctAnswer.push(element.correct_answer);
  });
  const UpdateQuistion = (answer) => {
    // check if the answer is correct and update the score
    if (
      answer.target.innerText.toLowerCase() ==
      quizData.correctAnswer[currentQuestion].toLowerCase()
    ) {
      if (score >= 10) {
        setScore(0);
        localStorage.setItem("score", JSON.stringify(0));
      }
      setScore((prev) => prev + 1);
      localStorage.setItem("score", JSON.stringify(score + 1));
    }

    if (currentQuestion >= quizData.allQuestions.length - 1) {
      alert("Quiz Finished");
      window.location.href = "http://localhost:5173/congrat";
      setCurrentQuestion(0);
      setScore(0);
      return;
    }
    setCurrentQuestion((perv) => perv + 1);
  };
  const navigateQuestion = (index) => {
    setCurrentQuestion(index);
  };
  return (
    <AppContext.Provider
      value={{
        quizData,
        score,
        UpdateQuistion,
        navigateQuestion,
        currentQuestion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider };
