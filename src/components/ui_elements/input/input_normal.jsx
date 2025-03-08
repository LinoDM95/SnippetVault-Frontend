import React from "react";

function InputNormal({ label, name, inputValue, onInputChange, type }) {
  /**
   * @param label Choose the label as a string
   * @param name Choose the name and id of the tag
   * @param inputValue Value of the inputfield
   * @param onInputChange Is the callback function
   * @param type Choose the type as a string
   */

  return (
    <div className="relative z-0 w-full mb-6 group">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <label
        htmlFor={name}
        className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}

export default InputNormal;
