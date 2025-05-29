import { createBrowserRouter, Navigate } from "react-router";
import App from "./app";
import {
  RequestsPage,
  RequestNewPage,
  RequestDetailPage,
} from "@/pages/request";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/requests" replace />,
      },
      {
        path: "requests",
        Component: RequestsPage,
      },
      {
        path: "requests/:id",
        Component: RequestDetailPage,
      },
      {
        path: "requests/new",
        Component: RequestNewPage,
      },
    ],
  },
]);

export default router;
