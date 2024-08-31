import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import LearningPage from "./Pages/LearningPage";
import CreatePage from "./Pages/CreatePage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      {/* remove this before push */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* remove this before push */}
        <Route path="/learning" element={<LearningPage />} />
        {/* remove this before push */}
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
