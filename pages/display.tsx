import React from "react";

export const Display = ({ value }: { value: number }) => {
  console.log("🚀 ~ file: display.tsx ~ line 4 ~ Display ~ value", value);
  return <div className="font-digital text-8xl">value</div>;
};
