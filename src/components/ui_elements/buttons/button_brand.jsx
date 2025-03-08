import React from "react";
import { IoAdd } from "react-icons/io5";

const ButtonBrand = ({
  onBtnClick,
  colorBorder = "border-primary",
  colorBackground = "bg-secondary",
  colorText = "text-primary",
  label,
  type = "",
  className,
}) => {
  return (
    <button
      className={` ${className} flex items-center justify-center border-1 ${colorText} ${colorBorder} ${colorBackground} rounded-full cursor-pointer px-5 py-1 font-semibold hover:text-text-on-primary hover:bg-primary hover:border-secondary transition-all duration-300`}
      onClick={onBtnClick}
      type={type}
    >
      {label}
    </button>
  );
};
export default ButtonBrand;
