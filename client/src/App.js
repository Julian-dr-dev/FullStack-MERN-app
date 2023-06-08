import { BorwserRouter, Navigate, Routes, Route } from 'react-router-dom';
import homePage from "scenes/homePage";
import loginPage from "scenes/loginPage";
import profilePage from "scenes/profilePage";

function App() {
  const mode = use
    return
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<loginPage />} />
              <Route path='/home' element={<homePage />} />
              <Route path='/profile/:userId' element={<profilePage/>} />
            </Routes>
          </BrowserRouter>

    </div>

}

export default App;
