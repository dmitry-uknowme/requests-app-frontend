import { Button } from "@/shared/ui/button";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Outlet, RouterProvider } from "react-router";
import router from "./router";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
