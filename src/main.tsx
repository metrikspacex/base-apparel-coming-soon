import "@styles/globals.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { routerClient } from "@src/router";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <RouterProvider router={routerClient} />
  </React.StrictMode>
);
