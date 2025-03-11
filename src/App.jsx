import "./App.css";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
