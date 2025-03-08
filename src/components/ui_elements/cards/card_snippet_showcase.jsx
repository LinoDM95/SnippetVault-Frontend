import React from "react";
import ButtonBrand from "../buttons/button_brand";

const CardSnippetShowCase = ({
  title = "This is an title example",
  user,
  description = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam qui sapiente porro illum voluptatum eos doloremque minus voluptates rem inventore quasi repudiandae, quam numquam quos enim error sequi laboriosam iste.",
  language = "Example Language",
  onBtnClick,
}) => {

  return (
    <div className="relative flex flex-col my-6 bg-white rounded-lg shadow-md w-96 hover:shadow-xl transition-shadow duration-300">
      <div className="flex relative h-56 m-4 overflow-hidden rounded-lg items-center justify-center bg-primary">
        <h1 className="font-bold text-white text-3xl">
          {user}
        </h1>
      </div>
      <div className="p-6">
        <h6 className="text-gray-900 text-xl font-bold mb-2">
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </h6>
        <div className="flex items-center mb-4">
          <p className="text-secondary font-semibold">{language}</p>
        </div>
        <p className="text-gray-700 font-light mb-6">
          {description.length > 40 ? description.slice(0, 40) + "..." : description}
        </p>
        <ButtonBrand label="Open Snippet" onBtnClick={onBtnClick} className="w-full"/>
      </div>
    </div>
  );
};

export default CardSnippetShowCase;
