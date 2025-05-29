// import { Provider } from "react-redux";
// import { mainStore } from "../store/main-store";

// type MainProvidersProps = {
//   children: ReactNode;
// };

// const MainProvider = () => {
//   return <Provider store={mainStore}>{children}</Provider>;
// };

// export default MainProviders;

import { Provider } from "react-redux";
import { mainStore } from "../store/main-store";
import type { HTMLAttributes } from "react";
import { Toaster } from "sonner";

export const MainProvider: React.FC<HTMLAttributes<FragmentDirective>> = ({
  children,
}) => {
  return (
    <Provider store={mainStore}>
      <>
        {children}
        <Toaster />
      </>
    </Provider>
  );
};
