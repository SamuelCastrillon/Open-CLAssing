import { render } from "preact";
import "./modules/core/design-system/index.css";
import "./modules/core/i18n";
import HomeView from "./modules/home/views/HomeView";

render(<HomeView />, document.getElementById("root")!);
