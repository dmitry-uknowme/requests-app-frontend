import { createBrowserRouter, Navigate } from "react-router";
import App from "./app";
import RequestsPage from "@/pages/request/requests.page";
import RequestNewPage from "@/pages/request/request-new.page";
import RequestDetailPage from "@/pages/request/request-detail.page";

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
