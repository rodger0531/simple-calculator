import React, { useState } from "react";
import Display from "./display";
import Pad from "./pad";

export default function App() {
  const [displayValue, setDisplayValue] = useState<any>("");

  return (
    <div>
      <Display value={displayValue} />
      <Pad displayValue={displayValue} setDisplayValue={setDisplayValue} />
    </div>
  );
}
