import { useState, useContext } from "react";
import { AuthContext } from "../../utils/auth_context";
import { SnippetContext } from "../../utils/snippet_context";
import PopUpBase from "../bases/pop_up_base";
import InputNormal from "../ui_elements/input/input_normal";
import ButtonBrand from "../ui_elements/buttons/button_brand";
import TextCodeEditor from "../ui_elements/input/code_editor";

const CreateSnippetPopUp = ({ onClickClose }) => {
  const isDevelopment = import.meta.env.MODE === "development";
  const API_URL = isDevelopment
    ? import.meta.env.VITE_API_BASE_URL_LOCAL
    : import.meta.env.VITE_API_BASE_URL_DEPLOY;
  const { user } = useContext(AuthContext);
  const { refreshSnippets } = useContext(SnippetContext);

  const [formData, setFormData] = useState({
    user_id: user.id,
    title: "",
    language: "",
    description: "",
    code: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/create-snippet/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setMessage("Snippet wurde erfolgreich gespeichert!");
        setFormData({ title: "", language: "", description: "", code: "" });
        refreshSnippets();
        onClickClose();
      } else {
        setMessage("Fehler: " + JSON.stringify(data.errors));
      }
    } catch (error) {
      setMessage(error);
    }
  };

  return (
    <PopUpBase title="Create Your Snippet" onClick={onClickClose}>
      {message && <p className="mb-4 text-center text-secondary">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 md:w-200 relative ">
        <InputNormal
          label="Title"
          name="title"
          inputValue={formData.title}
          onInputChange={(value) => setFormData({ ...formData, title: value })}
        />
        <InputNormal
          label="Language"
          name="language"
          inputValue={formData.language}
          onInputChange={(value) =>
            setFormData({ ...formData, language: value })
          }
        />
        <InputNormal
          label="Description"
          name="description"
          inputValue={formData.description}
          onInputChange={(value) =>
            setFormData({ ...formData, description: value })
          }
        />

        <TextCodeEditor
          label="Code"
          language={formData.language || "javascript"}
          code={formData.code}
          onChange={(value) => setFormData({ ...formData, code: value })}
        />

        <div className="flex">
          <ButtonBrand label="Save Snippet" className={"w-full"} />
        </div>
      </form>
    </PopUpBase>
  );
};

export default CreateSnippetPopUp;
