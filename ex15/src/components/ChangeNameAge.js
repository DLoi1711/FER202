import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label fw-bold">Name:</label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", value: e.target.value })
            }
            placeholder="Input name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Age:</label>
          <input
            type="number"
            className="form-control"
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "SET_AGE", value: e.target.value })
            }
            placeholder="Input age"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="fw-bold">Name: {state.name || ""}</h3>
          <h3 className="fw-bold">Age: {state.age || ""}</h3>
        </div>
      </div>
    </div>
  );
}

export default ChangeNameAge;
