import React, { useState } from "react";
import Display from "./display";
import Pad from "./pad";
import { Digit, Operator } from "../lib/types";

export default function App() {
  const [display, setDisplay] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [pendingOperator, setPendingOperator] = useState<
    Operator | undefined
  >();
  const [waitingOperand, setWaitingOperand] = useState<boolean>(true);

  return (
    <div className="shadow-xl">
      <Display
        value={display}
        expression={
          pendingOperator
            ? `${result} ${pendingOperator} ${waitingOperand ? "" : display}`
            : ""
        }
      />
      <Pad
        result={result}
        display={display}
        pendingOperator={pendingOperator}
        waitingOperand={waitingOperand}
        setResult={setResult}
        setDisplay={setDisplay}
        setPendingOperator={setPendingOperator}
        setWaitingOperand={setWaitingOperand}
      />
    </div>
  );
}
