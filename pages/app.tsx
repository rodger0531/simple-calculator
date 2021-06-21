import React, { useState } from "react";
import Display from "./display";
import Pad from "./pad";
import { Digit, Operator } from "../lib/types";

export default function App() {
  const [display, setDisplay] = useState<string>("0");
  const [result, setResult] = useState<number>(0);
  const [pendingOperator, setPendingOperator] = useState<Operator>();
  const [waitingOperand, setWaitingOperand] = useState<boolean>(false);

  const calculate = (operand: number) => {
    let newResult = result;
    switch (pendingOperator) {
      case "+":
        newResult += operand;
        break;
      case "-":
        newResult -= operand;
        break;
      case "×":
        newResult *= operand;
        break;
      case "÷":
        if (operand === 0) return false;
        newResult /= operand;
        break;
    }

    setResult(newResult);
    setDisplay(newResult.toString().slice(0, 10));

    return true;
  };

  const onDigitButtonClick = (digit: Digit) => {
    let newDisplay = waitingOperand ? "" : display;
    waitingOperand && setWaitingOperand(false);

    if (display !== "0") {
      newDisplay += digit;
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    if (display.indexOf(".") > -1) return;
    let newDisplay = waitingOperand ? "0" : display;
    setDisplay((newDisplay += "."));
    setWaitingOperand(false);
  };

  const onOperatorButtonClick = (operator: Operator) => {
    const operand = Number(display);
    if (pendingOperator && !waitingOperand) {
      if (!calculate(operand)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingOperand(true);
  };

  const onChangeSignButtonClick = () => {};

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (pendingOperator && !waitingOperand) {
      if (!calculate(operand)) {
        return;
      }
      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingOperand(true);
  };

  const onAllClearButtonClick = () => {
    setDisplay("0");
    setResult(0);
    setPendingOperator(undefined);
  };

  const onClearEntryButtonClick = () => {};

  const onMemoryRecallButtonClick = () => {};

  const onMemoryClearButtonClick = () => {};

  const onMemoryPlusButtonClick = () => {};

  const onMemoryMinusButtonClick = () => {};

  return (
    <div>
      <Display
        value={display}
        expression={
          pendingOperator
            ? `${result} ${pendingOperator} ${waitingOperand ? "" : display}`
            : ""
        }
      />
      <Pad
        onDigitButtonClick={onDigitButtonClick}
        onPointButtonClick={onPointButtonClick}
        onOperatorButtonClick={onOperatorButtonClick}
        onChangeSignButtonClick={onChangeSignButtonClick}
        onEqualButtonClick={onEqualButtonClick}
        onAllClearButtonClick={onAllClearButtonClick}
        onClearEntryButtonClick={onClearEntryButtonClick}
        onMemoryRecallButtonClick={onMemoryRecallButtonClick}
        onMemoryClearButtonClick={onMemoryClearButtonClick}
        onMemoryPlusButtonClick={onMemoryPlusButtonClick}
        onMemoryMinusButtonClick={onMemoryMinusButtonClick}
      />
    </div>
  );
}
