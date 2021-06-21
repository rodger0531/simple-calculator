import React from "react";
import Button from "./button";
import { useState } from "react";
import { multiply } from "../core/utility";

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
  displayValue,
  setDisplayValue,
}: {
  displayValue: string;
  setDisplayValue: Function;
}) {
  const [tempValue, setTempValue] = useState<number | null>(null);
  const [prevMathOperator, setPrevMathOperator] = useState("");

  const onClickHandler = (value: string) => {
    switch (value) {
      default: {
        setDisplayValue((state: string) => (state += value));
        break;
      }
      case "AC": {
        setDisplayValue("");
      }
      case "±":
        break;
      case "%":
        break;
      case "÷":
        break;
      case "×":
        if (tempValue === null) {
          setTempValue(+value);
          setPrevMathOperator("x");
          break;
        }
        if (prevMathOperator === null) {
        }
        setDisplayValue((state: string) => `${multiply(tempValue, +state)}`);
        setTempValue(null);
        break;
      case "−":
        break;
      case "+":
        break;
      case "=":
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 text-center">
      {number.map((x) => (
        <Button
          key={x}
          className={x === "0" ? "col-span-2" : ""}
          value={x}
          onClickHandler={() => onClickHandler(x)}
        />
      ))}
    </div>
  );
}
