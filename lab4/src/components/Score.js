import React from "react";

const Score = ({ score, totalQuestions }) => {
    return (
        <div className="text-center">
            <h2 className="text-danger">Quiz Completed!</h2>
            <p className="fs-4">Your score: {score}</p>
        </div>
    );
};

export default Score;