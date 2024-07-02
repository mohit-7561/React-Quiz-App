// Question component to display a question and its options
const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
