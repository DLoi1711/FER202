import React from "react";

const Question = ({ questionData, questionNumber, selectedAnswer, handleAnswerClick, handleNextClick }) => {
    return (
        <div className="card mx-auto p-4" style={{ maxWidth: "500px" }}>
            <h2 className="card-title text-danger">Question {questionNumber}</h2>
            <p className="card-text">{questionData.question}</p>
            {questionData.answers.map((option, index) => (
                <div key={index} className="form-check">
                    <input
                        type="radio"
                        name="answer"
                        id={`option${index}`}
                        className="form-check-input"
                        checked={selectedAnswer === option}
                        onChange={() => handleAnswerClick(option)}
                    />
                    <label className="form-check-label" htmlFor={`option${index}`}>{option}</label>
                </div>
            ))}
            <button 
                className="btn btn-danger mt-3" 
                onClick={handleNextClick}
                disabled={!selectedAnswer}
            >
                Next
            </button>
        </div>
    );
};

export default Question;
