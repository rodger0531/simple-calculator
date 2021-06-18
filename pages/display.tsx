import React from "react";

export const Display = ({ value }: { value: string }) => {
  return (
    <div className="font-digital text-8xl w-full text-right">{value || 0}</div>
  );
};
