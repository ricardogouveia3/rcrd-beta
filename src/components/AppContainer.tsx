import { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
  darkMode: boolean;
};

export default function AppContainer({ children, darkMode }: Readonly<AppContainerProps>) {
  return (
    <main className={`${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900 bg-noise-light dark:bg-noise-dark bg-repeat min-h-screen flex items-center justify-center`}>
      <div className="max-w-7xl p-6 lg:max-w-7xl lg:p-8">
        {children}
      </div>
    </main>
  );
}
