import React from "react";

export const BreakSessionContainer = ({ children, ...props }) => {
  return (
    <div className="flex flex-col items-center" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel = ({ children, ...props }) => {
  return <p className="text-lg text-white">{children}</p>;
};

export const BreakSessionTime = ({ children, ...props }) => {
  return (
    <p className="text-4xl font-bold text-white" {...props}>
      {children}
    </p>
  );
};

export const PlusMinusButtonContainer = ({ children, ...props }) => {
  return (
    <div className="grid grid-flow-col gap-2 rounded" {...props}>
      {children}
    </div>
  );
};

export const PlusMinusButton = ({ children, ...props }) => {
  return (
    <button
      className="mt-2 text-lg text-gray-800 px-4 py-2 bg-white rounded"
      {...props}
    >
      {children}
    </button>
  );
};
