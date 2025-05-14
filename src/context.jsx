import { createContext, useContext, useEffect, useState } from "react";
import getQuestions from "./data/api";
const AppContext = createContext();

function AppProvider({ children }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [finished, setFinished] = useState(false);
  const [counter, setCounter] = useState(0);
  const [allOptions, setAllOptions] = useState([]);
  const [data, setData] = useState({
    allQuestions: [],
    options: [],
    correctAnswer: [],
  });

  // get the data from the api
  // loop over the response and push the question, options and correct answer to the quizData object
  // set the quizData object to the data state
  useEffect(() => {
    getQuestions().then((res) => {
      let quizData = {
        allQuestions: [],
        options: [],
        correctAnswer: [],
      };
      res.forEach((element) => {
        quizData.allQuestions.push(element.question);
        quizData.options.push([
          ...element.incorrect_answers,
          element.correct_answer,
        ]);
        quizData.correctAnswer.push(element.correct_answer);
      });
      setData(quizData);
      setLoading(false);
    });
  }, []);
  // shuffle the options for each question
  useEffect(() => {
    const opt = data?.options[currentQuestion];
    const shuffledOptions = opt?.sort(() => Math.random() - 0.5);
    setAllOptions(shuffledOptions);
  }, [data, currentQuestion]);

  // decode html entities
  const decodeHtml = (element) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = element;
    return txt.value;
  };

  // function to show right icon if the answer was correct and wrong icon if the answer was wrong
  const showAnsweIcon = (e, name) => {
    const parent = e.target;
    const answer = parent.querySelector(`.${name}`);
    answer.classList.remove("hidden");
    setTimeout(() => answer.classList.add("hidden"), 1000);
  };

  const UpdateQuistion = (answer) => {
    // increas the counter by 1 to track the number of questions answered
    setCounter((prev) => prev + 1);
    if (counter === 9) {
      setFinished(true);
    }
    // check if the answer is correct and update the score

    if (
      answer.target.innerText.toLowerCase() ==
      decodeHtml(data.correctAnswer[currentQuestion].toLowerCase())
    ) {
      setScore((prev) => prev + 1);
      localStorage.setItem("score", JSON.stringify(score + 1));
      showAnsweIcon(answer, "right");
    } else {
      showAnsweIcon(answer, "wrong");
    }
    // check if the current question is the last question and reset the current question
    if (currentQuestion >= data.allQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(0);
      }, 1000);
      return;
    }
    setTimeout(() => {
      setCurrentQuestion((perv) => perv + 1);
    }, 1000);
  };
  if (finished) {
    setTimeout(() => {
      window.location.href = "http://localhost:5173/congrat";
      setFinished(false);
      setScore(0);
    }, 1000);
  }
  const navigateQuestion = (index) => {
    setCurrentQuestion(index);
  };
  // shuffle(quizData.options);

  return (
    <AppContext.Provider
      value={{
        data,
        decodeHtml,
        allOptions,
        score,
        loading,
        setLoading,
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
