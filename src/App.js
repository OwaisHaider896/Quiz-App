import React, { useState, useEffect } from "react";
import Questionire from "./Questionaire";
import "./styles.css";

export default function App() {
  const [questions, setQuestions] = useState([]);

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

  const handleAnswer = () => {};
  return (
    <div className="flex justify-center items-center h-screen">
      {questions.length > 0 ? (
        <div className="container">
          <Questionire data={questions[0]} handleAnswer={handleAnswer} />
        </div>
      ) : (
        <h1 className="text-2xl font-bold">Loading...</h1>
      )}
    </div>
  );
}
