import { createBrowserRouter } from "react-router-dom";

import { Page } from "@pages/root/page";

export const routerClient = createBrowserRouter([
  {
    element: <Page />,
    path: "/base-apparel-coming-soon/",
  },
]);
