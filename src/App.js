import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./Reducers/counter";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="temporary">
      <h1>{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default App;
