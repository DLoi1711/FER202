import React, { useState } from "react";
import Score from "./Score";
import Question from "./Question";
import "bootstrap/dist/css/bootstrap.min.css";

const quizData = [
    {
        question: 'What is ReactJS?',
        answers: ['A JavaScript library for building user interfaces', 'A programming language', 'A database management system'],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        question: 'What is JSX?',
        answers: ['A programming language', 'A file format', 'A syntax extension for JavaScript'],
        correctAnswer: 'A syntax extension for JavaScript'
    }
];

const QuizApp = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswer = (option) => {
        setSelectedAnswer(option);
    };

    const handleNext = () => {
        if (selectedAnswer === quizData[index].correctAnswer) {
            setScore(score + 1);
        }
        setIndex(index + 1);
        setSelectedAnswer(null);
    };

    return (
        <div className="container mt-5 text-center">
            {index < quizData.length ? (
                <Question 
                    questionData={quizData[index]} 
                    questionNumber={index + 1} 
                    selectedAnswer={selectedAnswer}
                    handleAnswerClick={handleAnswer} 
                    handleNextClick={handleNext}
                />
            ) : (
                <Score score={score} totalQuestions={quizData.length} />
            )}
        </div>
    );
};

export default QuizApp;
