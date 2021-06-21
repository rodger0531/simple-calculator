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
  // const [tempValue, setTempValue] = useState<number | null>(null);
  // const [prevMathOperator, setPrevMathOperator] = useState("");

  // const onClickHandler = (value: string) => {
  //   switch (value) {
  //     default: {
  //       setDisplayValue((state: string) => (state += value));
  //       break;
  //     }
  //     case "AC": {
  //       setDisplayValue("");
  //     }
  //     case "±":
  //       break;
  //     case "%":
  //       break;
  //     case "÷":
  //       break;
  //     case "×":
  //       if (tempValue === null) {
  //         setTempValue(+value);
  //         setPrevMathOperator("x");
  //         break;
  //       }
  //       if (prevMathOperator === null) {
  //       }
  //       setDisplayValue((state: string) => `${multiply(tempValue, +state)}`);
  //       setTempValue(null);
  //       break;
  //     case "−":
  //       break;
  //     case "+":
  //       break;
  //     case "=":
  //       break;
  //   }
  // };

  return (
    // <div className="grid grid-cols-4 grid-rows-4 text-center">
    //   <Button value="AC" onClickHandler={onAllClearButtonClick} />
    //   <Button value="C" onClickHandler={onClearEntryButtonClick} />
    //   <Button value="±" onClickHandler={onChangeSignButtonClick} />
    //   <Button value="÷" onClickHandler={onAllClearButtonClick} />
    //   {number.map((x) => (
    //     <Button
    //       key={x}
    //       className={x === "0" ? "col-span-2" : ""}
    //       value={x}
    //       onClickHandler={() => onClickHandler(x)}
    //     />
    //   ))}
    // </div>
    <div className="grid grid-cols-4 grid-rows-5 text-center w-96 h-128">
      <div className="col-span-3 flex flex-row">
        <Button value="A" />
        <Button value="A" />
        <Button value="A" />
      </div>
      <div className="row-span-5 flex flex-col">
        <Button value="B" />
        <Button value="B" />
        <Button value="B" />
        <Button value="B" />
        <Button value="B" />
      </div>
      <div className="col-span-3 row-span-4 grid grid-cols-3 grid-rows-4">
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" />
        <Button value="C" className="col-span-2" />
        <Button value="C" />
      </div>
    </div>
  );
}
