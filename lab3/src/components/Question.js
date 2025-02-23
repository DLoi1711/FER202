import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Question = ({ questionData, questionNumber, handleAnswerClick }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <h2 className="card-title">Question {questionNumber}</h2>
            <p>{questionData.question}</p>
            {questionData.options.map((option, index) => (
                <a className="card-text" key={index} onClick={() => handleAnswerClick(option)}>
                    {option}
                </a>
            ))}
        </div>
    );
};

export default Question;
