import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

const questions = [
    { id: 1, question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
    { id: 2, question: "Who developed React?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" },
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleNext = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(prevScore => prevScore + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(prev => prev + 1);
            setSelectedOption("");
        } else {
            setShowResult(true);
        }
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center">Quiz</h2>

            {!showResult ? (
                <Card className="p-4">
                    <h4>{questions[currentQuestion].question}</h4>
                    <Form>
                        {questions[currentQuestion].options.map(option => (
                            <Form.Check
                                key={option}
                                type="radio"
                                label={option}
                                name="quiz-option"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => setSelectedOption(option)}
                            />
                        ))}
                    </Form>
                    <Button variant="primary" className="mt-3" onClick={handleNext} disabled={!selectedOption}>
                        {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
                    </Button>
                </Card>
            ) : (
                <Card className="p-4 text-center">
                    <h3>Quiz Completed!</h3>
                    <p>Your Score: <strong>{score} / {questions.length}</strong></p>
                    <Button variant="success" className="m-2" onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); }}>
                        Restart Quiz
                    </Button>
                    <Link to="/">
                        <Button variant="secondary" className="m-2">Back to Home Page</Button>
                    </Link>
                </Card>
            )}
        </Container>
    );
}

export default Quiz;
