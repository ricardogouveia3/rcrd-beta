import { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
};

export default function AppContainer({ children }: Readonly<AppContainerProps>) {
  return (
    <main className="bg-gray-900 bg-noise-light bg-repeat min-h-screen flex items-center justify-center">
      <div className="max-w-7xl p-6 lg:max-w-7xl lg:p-8">
        {children}
      </div>
    </main>
  );
}
