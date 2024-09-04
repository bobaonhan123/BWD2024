import { Link } from "react-router-dom"

export default function Protect() {
    return (
        <div className="fixed w-screen h-screen
        top-0 left-0 bg-transparent backdrop-blur-xl flex items-center justify-center">
            <h1>You need to <Link to="/login"
            className="bg-gradient-to-r from-[#4FACFE] from-21%
            to-[#00F2FE]
            text-white px-4 py-2
            rounded-2xl">login</Link> to access this page</h1>
        </div>
    )
}