import { render } from "preact";
import "./modules/core/design-system/index.css";
import "./modules/core/i18n";
import HomeView from "./modules/home/views/HomeView";
import ErrorBoundary from "./modules/core/components/error-boundary/ErrorBoundary";

render(
  <ErrorBoundary>
    <HomeView />
  </ErrorBoundary>,
  document.getElementById("root")!,
);
