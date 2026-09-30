import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import Page1 from "./components/Page1";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/page1",
    Component: Page1,
  },
]);
