import React, { useState } from "react";
import Score from "./Score";
import Question from "./Question";

const QuizApp = () => {
    const questions = [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            id: 2,
            question: "What is the largest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Mars", "Earth"],
            answer: "Jupiter",
        },
    ];

    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (option) => {
        if (option === questions[index].answer) setScore(score + 1);
        setIndex(index + 1);
    };

    return index < questions.length ? (
        <Question questionData={questions[index]} handleAnswerClick={handleAnswer} />
    ) : (
        <Score score={score} totalQuestions={questions.length} />
    );
};

export default QuizApp;
