import { Route, Routes } from 'react-router-dom'
import Flashcard from "./DashboardPages/Flashcard"
import LeftBar from "../components/LeftBar"
import DashBoardPage from "./DashboardPages/DashBoardPage"
import RightBar from "../components/RightBar"

function Dashboard() {
    return (
        <div className="min-h-screen">
            <LeftBar />
            <Routes>
                <Route path="/" element={<DashBoardPage />} />
                <Route path="/flashcards" element={<Flashcard />} />
            </Routes>
            <RightBar />
        </div>
    )
}

export default Dashboard
