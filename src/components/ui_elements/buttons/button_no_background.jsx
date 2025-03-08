import React from "react";

const ButtonNoBackground = ({ buttonName, img, onBtnClick }) => {
  /**
   * @param buttonName: Name of the button
   * @param img: Image if needed
   * @param onBtnClick: Add functionality
   */

  return (
    <div>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
        onClick={onBtnClick}
      >
        {img && <span>{img}</span>}
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonNoBackground;
