import Flashcard from "./DashboardPages/Flashcard"
import LeftBar from "../components/LeftBar"

function Dashboard() {
    return (
        <div className="min-h-screen">
            <LeftBar />
            <Flashcard />
            <div className="max-w-96 w-1/5 fixed h-screen right-0 top-0 bg-metal"></div>
        </div>
    )
}

export default Dashboard