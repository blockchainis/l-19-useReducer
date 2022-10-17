import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>숫자:{number}</h1>
      <div>
        <button>+1</button>
        <button>-1</button>
      </div>
    </>
  );
}

export default Counter;
