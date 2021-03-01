import React, { useState, useEffect } from "react";
import Questionire from "./Questionaire";
import "./styles.css";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);
  const API_URL =
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

  const handleAnswer = (answer) => {
    if (!showAnswer) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswer(true);
  };
  const handleNextQuestion = () => {
    setShowAnswer(false);
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {questions.length > 0 ? (
        <div className="container">
          {currentIndex >= questions.length ? (
            <h1 className="text-3xl text-white text-center font-bold">
              Game Ended!! Your score is : {score}
            </h1>
          ) : (
            <Questionire
              data={questions[currentIndex]}
              handleAnswer={handleAnswer}
              showAnswer={showAnswer}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </div>
      ) : (
        <h1 className="text-2xl text-white font-bold">Loading...</h1>
      )}
    </div>
  );
}
