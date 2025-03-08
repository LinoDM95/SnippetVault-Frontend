import React from "react";


const ButtonSuccess = ({ buttonName = "Success", onBtnClick }) => {
  return (
    <div>
      <button
        className="group flex items-center gap-2 px-5 py-1 font-semibold rounded-full text-white bg-[#7AE582]  hover:brightness-75 transition-all duration-300 cursor-pointer"
        onClick={onBtnClick}
      >


        {buttonName}
      </button>
    </div>
  );
};
export default ButtonSuccess;
