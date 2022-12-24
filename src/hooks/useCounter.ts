import React, { useState } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  function increment(amount = 1) {
    setCount((count) => count + amount);
  }
  function decrement(amount = 1) {
    setCount((count) => count - amount);
  }

  return { count, increment, decrement };
}

export default useCounter;
