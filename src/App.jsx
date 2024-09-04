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
      <div className=" absolute inset-0 bg-[url('https://scontent.fdad1-4.fna.fbcdn.net/v/t1.15752-9/456386089_1679535819536368_7687038822474809695_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHHZvG4LmpMIyQv80lwPgjmMmGCuW0pY5cyYYK5bSljl4EUXkM34Q3gBNLpsno7i92luVgKHq9GqX7pjCUvF-5l&_nc_ohc=VEoReSxo7OMQ7kNvgESc4dK&_nc_ht=scontent.fdad1-4.fna&_nc_gid=AWsigiOhSJdQNMVrTsi-6NY&oh=03_Q7cD1QHWC4XGcO4z4qMn3wbq5Os5sLRjoS9xXpoS4wRjgYoAgQ&oe=66FFD4A2')] bg-cover bg-center filter "></div>
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
