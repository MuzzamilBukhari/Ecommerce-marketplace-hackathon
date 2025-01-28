import React from "react";

const TrialSection = () => {
  return (
    <div className="mt-12 text-center mb-10">
      <h2 className="text-2xl font-bold">Start your 14-day free trial</h2>
      <p className="text-gray-500 mt-2">
        No credit card required. Cancel anytime.
      </p>
      <button className="mt-4 px-8 py-4 bg-myHeading text-white font-bold rounded-lg shadow transition-transform  hover:scale-105">
        Try for Free
      </button>
    </div>
  );
};

export default TrialSection;
