import { useState, useEffect } from "react";
import BluePane from "../components/BluePane";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";
import ProtectLogin from "./ProtectLogin";
import { useLoginStore } from "../store/store";

function LoginPage() {
    const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
    const setIsLoggedin = useLoginStore((state) => state.setIsLoggedIn);
    const [option, setOption] = useState(false);

    const handleBluePaneClick = () => {
        setOption(!option);
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedin(true);
        }
    }, [setIsLoggedin]);

    return (
        <div className="h-screen mx-0 my-0 flex items-center">
            <div className="w-[90vw] h-[90vh] max-h-[517px] max-w-[1000px] bg-white mx-auto rounded-3xl shadow-2xl flex justify-between relative overflow-hidden">
                <RegisterComponent onLoginClick={handleBluePaneClick} option={option}/>
                <BluePane onClick={handleBluePaneClick} option={option} />
                <LoginComponent onRegisterClick={handleBluePaneClick} option={option}/>
            </div>
        {isLoggedIn && <ProtectLogin />}
        </div>
    );
}

export default LoginPage;
