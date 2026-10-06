import { createBrowserRouter } from "react-router";
import { createElement } from "react";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Z00Page from "./components/Z00Page";
import Z00About from "./components/Z00About";

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
    Component: Z00About,
  },
]);
