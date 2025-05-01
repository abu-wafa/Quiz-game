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
  const [finished, setFinished] = useState(false);
  const [counter, setCounter] = useState(0);

  // create an object to hold the Quiz data
  let quizData = {
    allQuestions: [],
    options: [],
    correctAnswer: [],
  };
  // loop through the data and push the questions, options and correct answer to the quizData object
  data.forEach((element) => {
    quizData.allQuestions.push(element.question);
    quizData.options.push([
      ...element.incorrect_answers,
      element.correct_answer,
    ]);
    quizData.correctAnswer.push(element.correct_answer);
  });
  // shuffle the options
  quizData.options.forEach((element) => {
    element.sort(() => Math.random() - 0.5);
  });
  const UpdateQuistion = (answer) => {
    // increas the counter by 1 to track the number of questions answered
    setCounter((prev) => prev + 1);
    if (counter === 9) {
      setFinished(true);
    }
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
    // check if the current question is the last question and reset the current question
    if (currentQuestion >= quizData.allQuestions.length - 1) {
      setCurrentQuestion(0);
      return;
    }
    setCurrentQuestion((perv) => perv + 1);
  };
  if (finished) {
    window.location.href = "http://localhost:5173/congrat";
    setFinished(false);
    setScore(0);
  }
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
