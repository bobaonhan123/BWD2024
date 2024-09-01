import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./components/Footer";
import MainPage from "./Pages/MainPage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import LearningPage from "./Pages/LearningPage";
import AppLayout from "./Pages/AppLayout";
import DashBoardPage from "./Pages/DashboardPages/DashBoardPage";
import Flashcard from "./Pages/Flashcard";
import CreatePage from "./Pages/CreatePage";
import CardDetails from "./Pages/CardDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="flashcards" element={<Flashcard />}>
            <Route path="create" element={<CreatePage />} />
          </Route>
          <Route path="flashcards/:id" element={<CardDetails />} />
        </Route>

        {/* remove this before push */}
        <Route path="/learning" element={<LearningPage />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
