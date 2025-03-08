import React from "react";
import { IoAdd } from "react-icons/io5";

const ButtonAddRoundedFull = ({
  onBtnClick,
  colorIcon = "text-primary",
  colorBorder = "border-primary",
}) => {
  return (
    <button
      className={`group flex items-center justify-center border-1 ${colorBorder} rounded-full hover:cursor-pointer cursor-pointer`}
      onClick={onBtnClick}
    >
      <IoAdd
        size={24}
        className={`${colorIcon}  group-hover:rotate-90 transition-all duration-300`}
      />
    </button>
  );
};
export default ButtonAddRoundedFull;
