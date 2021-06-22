import React, { useState, useEffect } from "react";
import Button from "./button";
import { Digit, Operator } from "../lib/types";
interface PadProps {
  isShowAllClearButton: boolean;
  onDigitButtonClick: (digit: Digit) => void;
  onPointButtonClick: () => void;
  onOperatorButtonClick: (operator: Operator) => void;
  onChangeSignButtonClick: () => void;
  onPercentageButtonClick: () => void;
  onEqualButtonClick: () => void;
  onAllClearButtonClick: () => void;
  onClearEntryButtonClick: () => void;
  onMemoryRecallButtonClick: () => void;
  onMemoryClearButtonClick: () => void;
  onMemoryPlusButtonClick: () => void;
  onMemoryMinusButtonClick: () => void;
}

const Operators = ["×", "÷", "-", "+", "="];
const Digits = [7, 8, 9, 4, 5, 6, 1, 2, 3];

export default function Pad({
  isShowAllClearButton,
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onPercentageButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryRecallButtonClick,
  onMemoryClearButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick,
}: PadProps) {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick((keyCode - 48) as Digit);
    } else if (keyCode >= 96 && keyCode <= 105) {
      onDigitButtonClick((keyCode - 96) as Digit);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick("×");
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick("÷");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick();
    } else if (keyCode === 46) {
      onClearEntryButtonClick();
    } else if (keyCode === 27) {
      onAllClearButtonClick();
    } else if (keyCode === 78) {
      onChangeSignButtonClick();
    } else if (keyCode === 80) {
      onMemoryPlusButtonClick();
    } else if (keyCode === 81) {
      onMemoryMinusButtonClick();
    } else if (keyCode === 82) {
      onMemoryRecallButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="grid grid-cols-4 grid-rows-5 text-center w-144 h-120">
      <div className="col-span-3 grid grid-flow-col grid-cols-3">
        {isShowAllClearButton ? (
          <Button
            value="AC"
            className="bg-red-900 hover:bg-red-800"
            onClickHandler={onAllClearButtonClick}
          />
        ) : (
          <Button value="C" onClickHandler={onClearEntryButtonClick} />
        )}
        <Button value="%" onClickHandler={onPercentageButtonClick} />
        <Button value="±" onClickHandler={onChangeSignButtonClick} />
      </div>
      <div className="row-span-5 grid">
        {Operators.map((operator) => (
          <Button
            key={operator}
            value={operator}
            className="bg-yellow-600 hover:bg-yellow-500"
            onClickHandler={
              operator === "="
                ? onEqualButtonClick
                : () => onOperatorButtonClick(operator as Operator)
            }
          />
        ))}
      </div>
      <div className="col-span-3 row-span-4 grid grid-cols-3 grid-rows-4">
        {Digits.map((num) => (
          <Button
            key={num}
            value={num}
            onClickHandler={() => onDigitButtonClick(num as Digit)}
          />
        ))}
        <Button
          value={0}
          onClickHandler={() => onDigitButtonClick(0)}
          className="col-span-2"
        />
        <Button value="." onClickHandler={onPointButtonClick} />
      </div>
    </div>
  );
}
