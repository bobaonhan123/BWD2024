import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
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
import PricingPage from "./Pages/PricingPage";

function App() {
  return (
    <div className="relative">
      <div className=" absolute inset-0 bg-[url('src/assets/images/material/ladingbag.png')] bg-cover bg-center filter "></div>
      <div className="relative z-10">
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
            <Route
              path="flashcards/:id/flashcard-learning"
              element={<LearningPage />}
            />
          </Route>
          <Route path="pricing" element={<PricingPage />} />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
