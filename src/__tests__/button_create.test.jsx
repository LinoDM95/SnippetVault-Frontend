import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonCreate from "../components/ui_elements/button_create";

describe("ButtonCreate Component", () => {
  test("renders the button with default text", () => {
    render(<ButtonCreate />);

    const buttonElement = screen.getByRole("button", { name: /create/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders the button with a custom text", () => {
    render(<ButtonCreate buttonName="Add Item" />);

    const buttonElement = screen.getByRole("button", { name: /add item/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onBtnClick function when clicked", () => {
    const mockClickHandler = vi.fn();
    render(<ButtonCreate onBtnClick={mockClickHandler} />);

    const buttonElement = screen.getByRole("button", { name: /create/i });
    fireEvent.click(buttonElement);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
