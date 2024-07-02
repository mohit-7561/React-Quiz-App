// Result component to display the final score
const Result = ({ score, total }) => {
  return (
    <div className="result-container">
      <h2>Your Score</h2>
      <p>
        {score} out of {total}
      </p>
    </div>
  );
};

export default Result;
