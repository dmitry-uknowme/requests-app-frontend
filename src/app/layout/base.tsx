import { useEffect, type HTMLAttributes } from "react";

interface BaseLayoutProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  actions?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  title,
  actions,
  children,
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, []);
  return (
    <div className="app">
      <header className="app_header flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
          {title}
        </h2>
        <div className="header_actions">{actions}</div>
      </header>
      <main className="flex-grow-1">{children}</main>
    </div>
  );
};

export default BaseLayout;
