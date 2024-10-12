import { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
  darkMode: boolean;
};

export default function AppContainer({ children, darkMode }: Readonly<AppContainerProps>) {
  return (
    <main className={`${darkMode ? "dark" : ""} bg-gray-50 dark:bg-quartz-d70 bg-noise-light dark:bg-noise-dark bg-repeat min-h-screen flex items-center justify-center overflow-hidden`}>
      <div className="w-full p-4 lg:p-6 flex flex-col items-center max-w-7xl tracking-tight">
        {children}
      </div>
    </main>
  );
}
