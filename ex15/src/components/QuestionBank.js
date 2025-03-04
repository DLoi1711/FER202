import React, { useReducer, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
  timer: 10,
  highScore: localStorage.getItem("highScore") || 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const feedback = isCorrect ? (
        <span className="text-success"><FaCheckCircle /> Correct! 🎉</span>
      ) : (
        <span className="text-danger"><FaTimesCircle /> Incorrect! The correct answer is {state.questions[state.currentQuestion].answer}</span>
      );
      const newScore = isCorrect ? state.score + 1 : state.score;
      const newHighScore = Math.max(newScore, state.highScore);
      localStorage.setItem("highScore", newHighScore);
      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback,
        showScore: state.currentQuestion + 1 === state.questions.length,
        timer: 10,
        highScore: newHighScore,
      };

    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };
    
    case "TICK":
      return { ...state, timer: state.timer - 1 };

    default:
      return state;
  }
}

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, timer, highScore } = state;

  useEffect(() => {
    if (timer > 0 && !showScore) {
      const countdown = setTimeout(() => dispatch({ type: "TICK" }), 1000);
      return () => clearTimeout(countdown);
    } else if (timer === 0) {
      dispatch({ type: "NEXT_QUESTION" });
    }
  }, [timer, showScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h3>High Score: {highScore}</h3>
            <Button variant="primary" onClick={handleRestartQuiz}>Restart Quiz</Button>
          </div>
        ) : (
          <div>
            <h4>
              Question {currentQuestion + 1}/{questions.length}:<br />
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            <h5 className={timer < 5 ? "text-danger" : ""}>Time left: {timer}s</h5>
            {feedback && <p>{feedback}</p>}
            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;