import React from "react";
import { CiLogin } from "react-icons/ci";
import { IoLogIn } from "react-icons/io5";

const ButtonLogin = ({ buttonName = "Login", onBtnClick }) => {
  /**
   * @param buttonName: Name of the button
   * @param onBtnClick: Add functionality
   */

  return (
    <div>
      <button
        className="group flex items-center justify-center w-full gap-2 px-4 py-2 rounded-full text-white bg-primary hover:brightness-75 transition-all duration-300 cursor-pointer"
        onClick={onBtnClick}
      >
        <span className="group-hover:hidden transition-all duration-300">
          <CiLogin size={24} />
        </span>
        <span className="hidden group-hover:inline transition-all duration-300">
          <IoLogIn size={24} />
        </span>
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonLogin;
