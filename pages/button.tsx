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
      className={`
        border
        focus:outline-none
        border-gray-900
        bg-gray-800
        hover:bg-gray-900
        duration-300
        transition-colors
        text-white
        text-5xl
        active:bg-opacity-50
        ${className}
      `}
      type="button"
      onClick={() => onClickHandler()}
    >
      {value}
    </button>
  );
}
