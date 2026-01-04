import { GlobalWindow } from "happy-dom";
import { expect } from "bun:test";
import * as matchers from "@testing-library/jest-dom/matchers";

//_ Configura happy-dom globalmente para simular el navegador
const window = new GlobalWindow();
global.window = window as any;
global.document = window.document as any;
global.navigator = window.navigator as any;
global.HTMLElement = window.HTMLElement as any;
global.Node = window.Node as any;

//_ Extiende los matchers de Bun Test con los de jest-dom
expect.extend(matchers as any);
