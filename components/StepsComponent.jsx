import React from "react";

const StepComponent = ({ stepNumber, title, description }) => {
  return (
    <div className="my-6">
      <p className="font-semibold text-black">{`${stepNumber}. ${title}`}</p>
      <p>{description}</p>
    </div>
  );
};

export default StepComponent;
