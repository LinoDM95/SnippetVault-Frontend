import { render, screen, fireEvent } from "@testing-library/react";
import PopUpBase from "../components/bases/pop_up_base";
import { vi } from "vitest";

describe("PopUpBase", () => {
  test("rendert den Titel und Kinder", () => {
    render(
      <PopUpBase title="Test PopUp">
        <p>Ich bin der Inhalt</p>
      </PopUpBase>,
    );

    expect(screen.getByText(/Test PopUp/i)).toBeInTheDocument();

    expect(screen.getByText(/Ich bin der Inhalt/i)).toBeInTheDocument();
  });

  test("schließt das PopUp, wenn der Close-Button geklickt wird", () => {
    const mockOnClick = vi.fn();

    render(<PopUpBase title="Test PopUp" onClick={mockOnClick} />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
