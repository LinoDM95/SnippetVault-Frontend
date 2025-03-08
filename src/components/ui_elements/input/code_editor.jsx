import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

function TextCodeEditor({ language, code, label, onChange }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <hr className="h-[2px] bg-gray-300 border-0 mb-2" />

      <CodeEditor
        value={code}
        language={language}
        placeholder="Bitte Code eingeben!"
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          border: "1px solid #ddd",
          borderRadius: "10px",
          fontFamily: "monospace",
          fontSize: 14,
        }}
      />
    </div>
  );
}

export default TextCodeEditor;
