import React from "react";

export const Button = ({
  value,
  className = "",
  onClickHandler,
}: {
  value: number | string;
  className?: string;
  onClickHandler: Function;
}) => {
  return (
    <button
      className={"min-w-36 h-28 border rounded text-4xl " + className}
      type="button"
      onClick={() => onClickHandler()}
    >
      {value}
    </button>
  );
};
