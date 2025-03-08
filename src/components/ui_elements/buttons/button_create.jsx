import React from "react";
import { IoAdd } from "react-icons/io5";

const ButtonCreate = ({ buttonName, onBtnClick, className = "", }) => {
      /**
   * @param buttonName: Name of the button
   * @param onBtnClick: Add functionality
   */

  return (
    <div>
      <button
        className={`group flex items-center gap-2 px-4 py-1 rounded-full text-text-on-primary border border-secondary hover:brightness-75 transition-all duration-300 cursor-pointer ${className}`}
        onClick={onBtnClick}
      >
        <IoAdd
          size={24}
          className="text-white transition-transform duration-300 group-hover:rotate-90 group-hover:text-secondary "
        />
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonCreate;
