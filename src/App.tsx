import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "@context/AppContext";
import Layout from "./layout/Layout";
import Home from "@pages/Home";
import Projects from "@pages/Projects";

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}
