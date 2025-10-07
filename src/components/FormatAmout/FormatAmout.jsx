import React from "react";

const FormatAmout = ({ amount }) => {
  return (
    <div className="font-bold">
      {amount} €
      <sup className="relative align-baseline mb-[5px] text-[0.6em]">00</sup>
      <sub className="relative align-baseline mb-0 left-[2px] text-[0.5em]">
        TTC
      </sub>
    </div>
  );
};

export default FormatAmout;
