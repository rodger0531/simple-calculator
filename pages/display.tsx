import React from "react";

export default function Display({
  value,
  expression,
}: {
  value: string;
  expression: string;
}) {
  return (
    <div className="font-digital w-full text-right my-8 px-6 text-white">
      <div className="text-xl h-12 text-gray-500">{expression}</div>
      <div className="text-8xl">{value}</div>
    </div>
  );
}
