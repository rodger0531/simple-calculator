import React from "react";
import { Button } from "./button";

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

export const NumberPad = ({
  setDisplayValue,
}: {
  setDisplayValue: Function;
}) => {
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
};
