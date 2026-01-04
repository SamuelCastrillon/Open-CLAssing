import { render, screen, fireEvent } from "@testing-library/preact";
import { expect, test, describe } from "bun:test";
import { Counter } from "./Debug";

describe("Debug Preact Hooks", () => {
  test("renders and updates state", async () => {
    render(<Counter />);
    const btn = screen.getByText("0");
    expect(btn).toBeTruthy();

    await fireEvent.click(btn);
    const btnAfter = await screen.findByText("1");
    expect(btnAfter).toBeTruthy();
  });
});
