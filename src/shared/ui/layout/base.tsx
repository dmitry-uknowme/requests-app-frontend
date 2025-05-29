import { useEffect, useState, type HTMLAttributes } from "react";
import { ChevronLeft } from "lucide-react";
import { useLocation, useNavigate, useNavigationType } from "react-router";
interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  actions?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  title,
  actions,
  children,
}) => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    if (navigationType === "PUSH") {
      setCanGoBack(true);
    }
  }, [navigationType]);

  const goBack = () => navigate(-1);

  return (
    <div className="app">
      <div className="container">
        <header className="app_header flex items-center justify-between">
          <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
            <div className="flex items-center cursor-pointer">
              {canGoBack && <ChevronLeft onClick={goBack} />}
              {title}
            </div>
          </h2>
          <div className="header_actions flex gap-4">{actions}</div>
        </header>
      </div>
      <main className="flex-grow-1">
        <div className="container">{children}</div>
      </main>
      {/* <Toaster /> */}
    </div>
  );
};

export default BaseLayout;
