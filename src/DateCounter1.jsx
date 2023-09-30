import { useState, useReducer } from "react";

function reducer(state, action) {
  if (action.type === "inc") return state + action.payload;
  if (action.type === "dec") return state + action.payload;
  if (action.type === "setCount") return action.payload;
}
export default function DataCounter1() {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  const date = new Date("21 june 2027");
  date.setDate(date.getDate() + count);

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  function inc() {
    // setCount((count) => count + step);
    dispatch({ type: "inc", payload: 1 });
  }
  function dec() {
    dispatch({ type: "dec", payload: -1 });
    // setCount((count) => count - step);
  }

  function reset() {
    // setCount(0);
    setStep(1);
  }

  function defineCount(e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <p>{date.toDateString()}</p>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
