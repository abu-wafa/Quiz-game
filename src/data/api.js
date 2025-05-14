import { useGlobalContext } from "../context";
const cacheKey = "cachedQuestions";
const mainurl = "https://restcountries.com/v3.1/all?limit=10";
const alternateUrl =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium";

export default async function getQuestions() {
  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    const response = await fetch(alternateUrl);

    if (response.status === 429) {
      console.warn("Rate limited. Retrying in 5 seconds...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return getQuestions(); // retry once
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const questions = data.results.map((question) => ({
      question: question.question,
      correct_answer: question.correct_answer,
      incorrect_answers: question.incorrect_answers,
    }));

    localStorage.setItem(cacheKey, JSON.stringify(questions));
    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
}
