import React from "react";

const TextArea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-myHeading hover:shadow-md transition-all"
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
