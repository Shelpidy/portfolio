"use client";

import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ChildProps {
  count: number;
}

export const Child = ({ count }: ChildProps) => {
  const [countValue, setCountValue] = useState(count);

  const increment = () => {
    setCountValue((countValue) => countValue + 1);
  };

  const returnNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  let r = returnNumber();
  const cacheValue = Math.floor(Math.random() * 10);

  return (
    <div className="m-5">
      <h2 className="m-2">This is a child</h2>
      <h2>Cache Value {cacheValue}</h2>
      <h2>Function Value {r}</h2>
      <h1 className="m-2">{countValue}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};
