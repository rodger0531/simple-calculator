import React from "react";

export default function Display({ value }: { value: string }) {
  return (
    <div className="font-digital text-8xl w-full text-right">{value || 0}</div>
  );
}
