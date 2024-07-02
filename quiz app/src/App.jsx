import { useState } from "react";
import Question from "./Components/Question";
import Result from "./Components/Result";
import "./App.css";

//  Array of questions for the quiz
const questions = [
  {
    questionText: "Who is known as the Master Blaster in cricket?",
    options: [
      "Sachin Tendulkar",
      "Ricky Ponting",
      "Brian Lara",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    questionText: "Which team won the first-ever ICC T20 World Cup in 2007?",
    options: ["Australia", "Pakistan", "India", "England"],
    answer: "India",
  },
  {
    questionText:
      "How many ICC trophies has MS Dhoni captained India to victory in?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
];

// Main App component
const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Function to handle when an answer is selected
  const handleAnswer = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    // Move to the next question
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // Show the result if all questions have been answered
      setShowResult(true);
    }
  };
  // Render the Question component or Result component based on the state
  return (
    <div className="app">
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default App;
