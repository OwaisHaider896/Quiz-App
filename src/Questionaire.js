import React from "react";

const Questionire = ({
  handleAnswer,
  handleNextQuestion,
  showAnswer,
  data: { question, correct_answer, incorrect_answers }
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div className="flex flex-col">
      <div className=" mt-4 bg-white text-purple-800 p-10 shadow-md rounded-lg">
        <h1
          className="text-2xl "
          dangerouslySetInnerHTML={{ __html: question }}
        ></h1>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswer.map((answer) => {
          const textColor = showAnswer
            ? answer === correct_answer
              ? "text-green-500"
              : "text-red-500"
            : "text-purple-800";
          return (
            <button
              className={`${textColor} p-4 rounded shadow  bg-white`}
              onClick={() => handleAnswer(answer)}
              answer={shuffledAnswer[0]}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
      {showAnswer && (
        <button
          onClick={handleNextQuestion}
          className="p-4 ml-auto rounded shadow bg-purple-800 mt-6 text-white"
        >
          Next Question
        </button>
      )}
    </div>
  );
};
export default Questionire;
