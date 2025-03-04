import React, { useReducer } from "react";
import { Button, Container } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

// Định nghĩa reducer xử lý hành động
function counterReducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <Container className="text-center mt-4">
            <h1 className="fw-bold">Counter: {state.count}</h1>
            <div className="d-flex justify-content-center gap-2 my-3">
                <Button variant="primary" onClick={() => dispatch({ type: "INCREMENT" })}>
                    <FaPlus />
                </Button>
                <Button variant="danger" onClick={() => dispatch({ type: "DECREMENT" })}>
                    <FaMinus />
                </Button>
                <Button variant="secondary" onClick={() => dispatch({ type: "RESET" })}>
                    Reset
                </Button>
            </div>
        </Container>
    );
}

export default Counter;