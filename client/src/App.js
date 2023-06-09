import { BorwserRouter, Navigate, Routes, Route } from 'react-router-dom';
import homePage from "scenes/homePage";
import loginPage from "scenes/loginPage";
import profilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";




function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return
        <div className="app">
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
            <Routes>
              <Route path='/' element={<loginPage />} />
              <Route path='/home' element={<homePage />} />
              <Route path='/profile/:userId' element={<profilePage/>} />
            </Routes>
            </ThemeProvider>
          </BrowserRouter>

    </div>

}

export default App;
