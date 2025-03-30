import { useContext } from "react";
import { AppContext } from "@context/AppContext";
import AppContainer from "@components/Containers/AppContainer";
import Header from "@sections/Header";
import Footer from "@sections/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const appContext = useContext(AppContext);
  if (!appContext) return null;

  const { darkMode, language, toggleDarkMode, toggleLanguage } = appContext;

  return (
    <AppContainer darkMode={darkMode}>
      <Header
        darkMode={darkMode}
        language={language}
        handleDarkModeToggle={toggleDarkMode}
        handleLanguageToggle={toggleLanguage}
      />
      <Outlet />
      <Footer />
    </AppContainer>
  );
}
