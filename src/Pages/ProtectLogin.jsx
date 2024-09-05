import { Link } from "react-router-dom"
import { useLoginStore } from "../store/store";


export default function ProtectLogin() {
    const setIsLoggedIn = useLoginStore((state) => state.setIsLoggedIn);
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      };
    return (
        <div className="fixed w-screen h-screen z-30
        top-0 left-0 bg-transparent backdrop-blur-xl flex items-center justify-center">
            <h1>You need to <button onClick={handleLogout}
            className="bg-gradient-to-r from-[#4FACFE] from-21%
            to-[#00F2FE]
            text-white px-4 py-2
            rounded-2xl">Log out</button> to access login page</h1>
        </div>
    )
}