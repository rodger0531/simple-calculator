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
      className={`border focus:outline-none border-gray-900 bg-gray-800 text-white text-5xl ${className}`}
      type="button"
      onClick={() => onClickHandler()}
    >
      {value}
    </button>
  );
}
