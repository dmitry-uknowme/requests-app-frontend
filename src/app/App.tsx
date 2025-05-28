import { Button } from "@/shared/ui/button";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app_title">
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
          Список заявок
        </h2>
      </div>
    </div>
  );
};

export default App;
