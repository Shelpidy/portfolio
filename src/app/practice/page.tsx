"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Child } from "@/components/Child";

interface ParentProps {
  children: React.ReactNode;
}

const Parent = ({ children }: ParentProps) => {
  const [showChild, setShowChild] = useState(true);
  const [reset, setReset] = useState(true);

  const toggleChild = () => {
    setShowChild((show) => !show);
  };

  return (
    <div>
      <h2>This is the parent</h2>
      <Button onClick={toggleChild}>Toggle children</Button>
      <Button onClick={() => setReset(!reset)}>Toggle children</Button>
      {showChild && children}
      <Child count={10} />
    </div>
  );
};

export default function PracticePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 md:px-20">
      <h2>Practice page</h2>
      <Parent>
        <Child count={0} />
      </Parent>
    </main>
  );
}
