import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { themeSettings } from "./theme";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Summary from "./pages/Summary";
import Paragraph from "./pages/Paragraph";
import Chatbot from "./pages/Chatbot";

import Navbar from "./components/Navbar";
import Code from "./pages/Code";

function App() {
  const theme = useMemo(() => createTheme(themeSettings()), []);

  return (
    <div className="App" width="100%">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/summary" element={<Summary />} />
          <Route exact path="/paragraph" element={<Paragraph />} />
          <Route exact path="/chatbot" element={<Chatbot />} />
          <Route exact path="/code" element={<Code />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
