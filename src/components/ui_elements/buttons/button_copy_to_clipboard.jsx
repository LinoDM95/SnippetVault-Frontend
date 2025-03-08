import React from "react";

const ButtonCopyToClipboard = ({ buttonName = "Copy", text, onBtnClick }) => {

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Copy went wrong", err);
    }
  };

  return (
    <div>
      <button
        className="group flex items-center gap-2 px-5 py-1 font-semibold rounded-full text-primary border-1 bg-secondary border-primary hover:text-text-on-primary hover:bg-primary hover:border-secondary hover:brightness-75 transition-all duration-300 cursor-pointer"
        onClick={() => {
          copyText(), onBtnClick();
        }}
      >
        {buttonName}
      </button>
    </div>
  );
};
export default ButtonCopyToClipboard;
