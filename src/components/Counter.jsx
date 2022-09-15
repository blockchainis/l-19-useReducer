import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_DOUBLE":
      return state + action.payload
    default:
      throw new Error("Unhandled action");
  }
}
function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>숫자:{number}</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => dispatch({ type: "INCREMENT_DOUBLE", payload: 2 })}>+2</button>
      </div>
    </>
  );
}

export default Counter;
