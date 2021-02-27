import React, { useState, useEffect } from "react";
import Questionire from "./Questionaire";
import "./styles.css";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        console.log(data);
      });
  }, []);
  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

  const handleAnswer = (answer) => {
    setCurrentIndex(currentIndex + 1);
    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {questions.length > 0 ? (
        <div className="container">
          {currentIndex >= questions.length ? (
            <h1 className="text-3xl font-bold">Your score is : {score}</h1>
          ) : (
            <Questionire
              data={questions[currentIndex]}
              handleAnswer={handleAnswer}
            />
          )}
        </div>
      ) : (
        <h1 className="text-2xl font-bold">Loading...</h1>
      )}
    </div>
  );
}
