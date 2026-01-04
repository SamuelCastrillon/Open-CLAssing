import { render } from "preact";
import "./modules/core/design-system/index.css";
import "./modules/core/i18n";
import HomeView from "./modules/home/views/HomeView";
import ErrorBoundary from "./modules/core/components/error-boundary/ErrorBoundary";
import { currentTheme } from "./modules/core/state/global-state";
import { effect } from "@preact/signals";

//_ Sincronización reactiva del tema con el DOM
effect(() => {
  document.documentElement.setAttribute("data-theme", currentTheme.value);
});

render(
  <ErrorBoundary>
    <HomeView />
  </ErrorBoundary>,
  document.getElementById("root")!,
);
