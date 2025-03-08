import React from "react";

function TextAreaNormal({ label, inputValue }) {
  /**
   * @param label Choose the label as a string
   * @param name Choose the name and id of the tag
   * @param inputValue Value of the inputfield
   * @param onInputChange Is the callback function
   * @param type Choose the type as a string
   *  */

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <hr className="h-[2px] bg-gray-300 border-0" />
      <p className="p-2 rounded text-gray-700">{inputValue}</p>
    </div>
  );
}

export default TextAreaNormal;
