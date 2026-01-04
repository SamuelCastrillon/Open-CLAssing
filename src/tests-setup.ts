import { GlobalWindow } from "happy-dom";
import { expect } from "bun:test";
import * as matchers from "@testing-library/jest-dom/matchers";

//_ Configura happy-dom globalmente para simular el navegador
const window = new GlobalWindow();
(global as unknown as { window: unknown }).window = window;
(global as unknown as { document: unknown }).document = window.document;
(global as unknown as { navigator: unknown }).navigator = window.navigator;
(global as unknown as { HTMLElement: unknown }).HTMLElement = window.HTMLElement;
(global as unknown as { Node: unknown }).Node = window.Node;

//_ Extiende los matchers de Bun Test con los de jest-dom
expect.extend(matchers as unknown as Record<string, (received: unknown, ...args: unknown[]) => { pass: boolean; message: () => string }>);
