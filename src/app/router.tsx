import { createBrowserRouter } from "react-router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/requests",
        Component: Show,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
      {
        path: "/requests/new",
        Component: Show,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
      {
        path: "/requests/:id",
        Component: Show,
        // loader: ({ request, params }) =>
        //   fetch(`/api/show/${params.showId}.json`, {
        //     signal: request.signal,
        //   }),
      },
    ],
  },
]);
