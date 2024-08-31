import Flashcard from "./DashboardPages/Flashcard"
import LeftBar from "../components/LeftBar"
import RightBar from "../components/RightBar"

function Dashboard() {
    return (
        <div className="min-h-screen">
            <LeftBar />
            <Flashcard />
            <RightBar />
        </div>
    )
}

export default Dashboard