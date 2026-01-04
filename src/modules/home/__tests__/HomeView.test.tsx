import { render, screen } from "@testing-library/preact";
import { expect, test, describe, mock } from "bun:test";
import HomeView from "../views/HomeView";

//_ Mockeamos Tauri API
mock.module("@tauri-apps/api/core", () => ({
  invoke: () => Promise.resolve("Mocked Greeter"),
}));

//_ Mockeamos react-i18next
mock.module("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const map: Record<string, string> = {
        welcome: "Bienvenido a OpenCL",
        name_placeholder: "Ingresa un nombre...",
        greet_button: "Saludar",
      };
      return map[key] || key;
    },
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

describe("HomeView", () => {
  test("renders welcome message", async () => {
    render(<HomeView />);
    //_ Verificamos que se use la traducción mockeada
    const welcomeText = screen.getByText(/Bienvenido a OpenCL/i);
    expect(welcomeText).toBeTruthy();
  });

  test("has the correct input placeholder from i18n", () => {
    render(<HomeView />);
    const input = screen.getByPlaceholderText(/Ingresa un nombre/i);
    expect(input).toBeTruthy();
  });
});
