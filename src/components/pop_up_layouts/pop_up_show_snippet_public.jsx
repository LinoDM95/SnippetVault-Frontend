import React, { useContext, useState } from "react";
// Components
import TextCodeEditor from "../ui_elements/input/code_editor";
import PopUpBase from "../bases/pop_up_base";
import ButtonCopyToClipboard from "../ui_elements/buttons/button_copy_to_clipboard";
import ButtonSuccess from "../ui_elements/buttons/button_success";
import TextAreaNormal from "../ui_elements/textarea_normal";
import ButtonBrand from "../ui_elements/buttons/button_brand";
//API
import { CreateSnippet } from "../../apis/create_snippet";
//Context
import { SnippetContext } from "../../utils/snippet_context";

function PopUpShowSnippetPublic({ dataObj, onClick }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const { refreshSnippets } = useContext(SnippetContext);

  function handleCopySuccess() {
    if (!copySuccess) {
      setCopySuccess(true);
      console.log("sfwsafs");
    }
  }

  async function handleSavePublicSnippet(snippetId) {
    console.log("snippetID:", snippetId);

    const response = await CreateSnippet(`create-saved-by/${snippetId}/`);
    refreshSnippets();
  }

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
        <div className="flex flex-col sm:flex-row justify-between gap-50 mt-4">
          {copySuccess ? (
            <ButtonSuccess buttonName="Copy Code" />
          ) : (
            <ButtonCopyToClipboard
              buttonName="Copy Code"
              text={dataObj.code}
              onBtnClick={handleCopySuccess}
            />
          )}
          <ButtonBrand
            label="Save as Private Snippet"
            onBtnClick={() => {
              handleSavePublicSnippet(dataObj.id);
              onClick();
            }}
          />
        </div>
      </div>
    </PopUpBase>
  );
}

export default PopUpShowSnippetPublic;
