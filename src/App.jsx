import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/pages/home";
import { CssBaseline } from "@mui/material";
import Request from "./components/pages/request";
import SubAdmin from "./components/pages/subadmin";
import { DrawerContext } from "./utils/context";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import appTheme from "./utils/theme";
import Sidebar from "./components/layouts/sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
        <ThemeProvider theme={appTheme}>
          <Router>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/request" element={<Request />} />
              <Route path="/subadmin" element={<SubAdmin />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </DrawerContext.Provider>
      <CssBaseline />
    </>
  );
}

export default App;
