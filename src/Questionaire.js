import React from "react";

const Button = ({ answer, className }) => (
  <button
    className={`bg-purple-600 rounded shadow-lg  text-white w-5/12 mb-4 p-4 ${className}`}
  >
    {answer}
  </button>
);

const Questionire = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers }
}) => {
  const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );
  return (
    <div>
      <div className=" mt-4 bg-purple-600 text-white p-10 shadow-md rounded-lg">
        <h1
          className="text-2xl "
          dangerouslySetInnerHTML={{ __html: question }}
        ></h1>
      </div>
      <div className="flex flex-wrap justify-around mt-4">
        <Button
          className={
            correct_answer === shuffledAnswer[0] ? "bg-yellow-500" : ""
          }
          onClick={() => handleAnswer(shuffledAnswer[0])}
          answer={shuffledAnswer[0]}
        />
        <Button
          className={
            correct_answer === shuffledAnswer[1] ? "bg-yellow-500" : ""
          }
          onClick={() => handleAnswer(shuffledAnswer[1])}
          answer={shuffledAnswer[1]}
        />
        <Button
          className={
            correct_answer === shuffledAnswer[2] ? "bg-yellow-500" : ""
          }
          onClick={() => handleAnswer(shuffledAnswer[2])}
          answer={shuffledAnswer[2]}
        />
        <Button
          className={
            correct_answer === shuffledAnswer[3] ? "bg-yellow-500" : ""
          }
          onClick={() => handleAnswer(shuffledAnswer[3])}
          answer={shuffledAnswer[3]}
        />
      </div>
    </div>
  );
};
export default Questionire;
