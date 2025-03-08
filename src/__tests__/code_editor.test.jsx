import { render, screen } from "@testing-library/react";
import TextCodeEditor from "../components/ui_elements/code_editor";
import { vi } from "vitest";

describe("TextCodeEditor", () => {
  test("rendert den Code-Editor mit übergebenem Code", () => {
    render(
      <TextCodeEditor
        language="javascript"
        code="console.log('Hello World');"
      />,
    );

    const editor = screen.getByRole("textbox");
    expect(editor).toBeInTheDocument();

    expect(editor).toHaveValue("console.log('Hello World');");
  });
});
