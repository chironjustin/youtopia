import { createBrowserRouter } from "react-router";
import { createElement } from "react";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Z00Page from "./components/Z00Page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/page1",
    Component: Page1,
  },
  {
    path: "/merch",
    Component: () => createElement(
      Z00Page,
      { title: "merch" },
      createElement("p", null, "The z00 merch archive is currently being prepared."),
    ),
  },
  {
    path: "/about",
    Component: () => createElement(
      Z00Page,
      { title: "why z00" },
      createElement("p", null, "z00 is a space for projects, experiments, and the people moving through them."),
    ),
  },
]);
