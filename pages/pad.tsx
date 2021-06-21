import React, { FunctionComponent } from "react";
import Button from "./button";
import { useState } from "react";
import { multiply } from "../core/utility";
import { Digit, Operator } from "../lib/types";
interface PadProps {
  onDigitButtonClick: (digit: Digit) => void;
  onPointButtonClick: () => void;
  onOperatorButtonClick: (operator: Operator) => void;
  onChangeSignButtonClick: () => void;
  onEqualButtonClick: () => void;
  onAllClearButtonClick: () => void;
  onClearEntryButtonClick: () => void;
  onMemoryRecallButtonClick: () => void;
  onMemoryClearButtonClick: () => void;
  onMemoryPlusButtonClick: () => void;
  onMemoryMinusButtonClick: () => void;
}

const number = [
  "AC",
  "±",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "−",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

export default function Pad({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryRecallButtonClick,
  onMemoryClearButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick,
}: PadProps) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 text-center w-128 h-128">
      <div className="col-span-3 grid grid-flow-col grid-cols-3">
        <Button value="AC" onClickHandler={onAllClearButtonClick} />
        <Button value="C" onClickHandler={onClearEntryButtonClick} />
        <Button value="±" onClickHandler={onChangeSignButtonClick} />
      </div>
      <div className="row-span-5 grid">
        {["×", "÷", "-", "+"].map((operators) => (
          <Button
            key={operators}
            value={operators}
            onClickHandler={onOperatorButtonClick}
          />
        ))}
        <Button value="=" onClickHandler={onEqualButtonClick} />
      </div>
      <div className="col-span-3 row-span-4 grid grid-cols-3 grid-rows-4">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <Button
            key={num}
            value={num}
            onClickHandler={() => onDigitButtonClick(num)}
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
