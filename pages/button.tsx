import React from "react";

export default function Button({
  value,
  className = "",
  onClickHandler,
}: {
  value: number | string;
  className?: string;
  onClickHandler: Function;
}) {
  return (
    <button
      className={
        "min-w-36 h-28 border border-gray-900 bg-gray-800 text-white text-4xl " +
        className
      }
      type="button"
      onClick={() => onClickHandler()}
    >
      {value}
    </button>
  );
}
