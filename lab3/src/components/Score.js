import React from "react";

const Score = ({ score, totalQuestions}) => {
    return (
        <div>
            <h2>Quiz Ended</h2>
            <p>Your Score: {score} / {totalQuestions}</p>
        </div>
    );
};

export default Score;