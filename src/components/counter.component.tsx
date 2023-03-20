"use client";

import { CounterContext } from "@/context/counter.context";
import React, { useContext } from "react";

export default function Counter() {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div style={{ marginBottom: "4rem", textAlign: "center" }}>
      <h4 style={{ marginBottom: 16 }}>{state.count}</h4>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{ marginInline: 16 }}
      >
        decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
}
