import { useTheme } from "@context/ThemeContext";
import AppContainer from "@components/Containers/AppContainer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { darkMode } = useTheme();

  return (
    <AppContainer darkMode={darkMode}>
      <Outlet />
    </AppContainer>
  );
}
