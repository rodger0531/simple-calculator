import React from "react";

export const Button = ({
  value,
  onClickHandler,
}: {
  value: number | string;
  onClickHandler: Function;
}) => {
  return <div onClick={() => onClickHandler}>{value}</div>;
};
