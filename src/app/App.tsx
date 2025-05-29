import { Outlet } from "react-router";
import { MainProvider } from "./provider/main-provider";

const App = () => {
  return (
    <>
      <MainProvider>
        <Outlet />
      </MainProvider>
    </>
  );
};

export default App;
