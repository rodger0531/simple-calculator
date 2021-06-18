import React from "react";
import { Button } from "./button";

const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const NumberPad = ({
  setDisplayValue,
}: {
  setDisplayValue: Function;
}) => {
  const onClickHandler = (value: string) => {
    setDisplayValue((state: string) => (state += value));
  };

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4 text-center">
      {number.map((x) => (
        <Button key={x} value={x} onClickHandler={() => onClickHandler(x)} />
      ))}
      <Button
        className="col-span-2"
        value={0}
        onClickHandler={() => onClickHandler("0")}
      />
      <Button value={"."} onClickHandler={() => onClickHandler(".")} />
    </div>
  );
};
