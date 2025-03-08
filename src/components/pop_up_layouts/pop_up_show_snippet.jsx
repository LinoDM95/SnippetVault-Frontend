import React, { useState } from "react";
import TextCodeEditor from "../ui_elements/input/code_editor";
import PopUpBase from "../bases/pop_up_base";
import ButtonCopyToClipboard from "../ui_elements/buttons/button_copy_to_clipboard";
import ButtonSuccess from "../ui_elements/buttons/button_success";
import ButtonDelete from "../ui_elements/buttons/button_delete";
import { deleteItem } from "../../apis/delete_item";
import TextAreaNormal from "../ui_elements/textarea_normal";

/**
 * TODO: DOCU
 */

function PopUpShowSnippet({ dataObj, onClick, refreshSnippets }) {
  /**
   * Generic code showcase popup window:
   */
  const [copySuccess, setCopySuccess] = useState(false);

  function handleCopySuccess() {
    if (!copySuccess) {
      setCopySuccess(true);
      console.log("sfwsafs");
    }
  }

  const handleDeleteSnippet = async (id) => {
    try {
      await deleteItem(dataObj.id);
      refreshSnippets();
      onClick();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <PopUpBase title={dataObj.title} onClick={onClick}>
      <div className="md:w-200 h-auto">
        <TextAreaNormal label="Language" inputValue={dataObj.language} />
        <TextAreaNormal label="Description" inputValue={dataObj.description} />

        <div>
          <TextCodeEditor
            language={dataObj.language}
            code={dataObj.code}
            label="Code"
          />
        </div>
        <div className="flex justify-between gap-50 mt-4">
          {copySuccess ? (
            <ButtonSuccess buttonName="Copy Code" />
          ) : (
            <ButtonCopyToClipboard
              buttonName="Copy Code"
              text={dataObj.code}
              onBtnClick={handleCopySuccess}
            />
          )}
          <ButtonDelete buttonName="" onBtnClick={handleDeleteSnippet} />
        </div>
      </div>
    </PopUpBase>
  );
}

export default PopUpShowSnippet;
