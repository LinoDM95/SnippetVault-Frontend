import React from "react";
import { MdDeleteOutline, MdDeleteForever } from "react-icons/md";

const ButtonDelete = ({ buttonName = "", onBtnClick }) => {
  /**
   * @param buttonName: Name of the button
   * @param onBtnClick: Add functionality
   */

  return (
    <div>
      <button
        className="group flex items-center gap-2  p-2 rounded-full text-primary bg-gradient-to-r from-secondary to-outline-ui
 hover:brightness-75 transition-all duration-300 cursor-pointer"
        onClick={onBtnClick}
      >
        <MdDeleteOutline
          size={20}
          className="group-hover:hidden transition-all duration-300"
        />
        <MdDeleteForever
          size={20}
          className="hidden group-hover:inline transition-all duration-300"
        />
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonDelete;
