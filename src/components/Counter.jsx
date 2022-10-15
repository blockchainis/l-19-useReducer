import { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_DOUBLE":
      return state + action.payload;
    default:
      throw new Error("Unhandled action");
  }
}
function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);
  const [state, toggleState] = useReducer((state) => !state, true);


  return (
    <>
      <h1>숫자:{number}</h1>
      <button
        style={{ background: state ? "red" : "black" }}
        onClick={() => toggleState()}
      >
        토글 버튼
      </button>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button
          onClick={() => dispatch({ type: "INCREMENT_DOUBLE", payload: 2 })}
        >
          +2
        </button>
      </div>
    </>
  );
}

export default Counter;
