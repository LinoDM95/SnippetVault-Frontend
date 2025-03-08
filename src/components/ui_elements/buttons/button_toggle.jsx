import React from "react";

const ButtonToggle = ({
  onBtnClick,
  isActive = false,
  isDeactivated = false,
  className = "",
}) => {
  const bgColor = isDeactivated
    ? "bg-gray-400"
    : isActive
    ? "bg-secondary"
    : "bg-white";

  return (
    <button
      onClick={isDeactivated ? undefined : onBtnClick}
      disabled={isDeactivated}
      className={`relative flex items-center w-16 h-7 rounded-full border-2 hover:cursor-pointer 
        transition-all duration-300 ${bgColor} ${className} `}
    >
      <div
        className={`absolute w-6 h-6 rounded-full shadow-md bg-primary
          transition-all duration-300 
          ${isDeactivated ? "translate-x-0" : isActive ? "translate-x-9" : "translate-x-0"}
          `}
      ></div>
    </button>
  );
};

export default ButtonToggle;
