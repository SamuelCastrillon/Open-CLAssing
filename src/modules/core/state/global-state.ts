import { signal } from "@preact/signals";

//? Usamos @preact/signals para un estado global reactivo, ligero y de alto rendimiento.

export const appStatus = signal<"idle" | "loading" | "error">("idle");
export const appMessage = signal<string | null>(null);

//? Gestión de temas
export const currentTheme = signal<string>(localStorage.getItem("theme") || "openClassing");

export const setAppLoading = () => (appStatus.value = "loading");
export const setAppIdle = () => (appStatus.value = "idle");
export const setAppError = (msg: string) => {
  appStatus.value = "error";
  appMessage.value = msg;
};

export const setTheme = (theme: string) => {
  currentTheme.value = theme;
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};
