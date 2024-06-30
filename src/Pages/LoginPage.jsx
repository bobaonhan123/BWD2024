import { useState } from "react";
import BluePane from "../components/BluePane";
import LoginComponent from "../components/LoginComponent";
import RegisterComponent from "../components/RegisterComponent";

function LoginPage() {
    const [option, setOption] = useState(false);

    const handleBluePaneClick = () => {
        setOption(!option);
    };

    return (
        <div className="h-screen mx-0 my-0 flex items-center">
            <div className="w-[90vw] h-[90vh] max-h-[517px] max-w-[1000px] bg-white mx-auto rounded-3xl shadow-2xl flex justify-between relative overflow-hidden">
                <RegisterComponent onLoginClick={handleBluePaneClick} option={option}/>
                <BluePane onClick={handleBluePaneClick} option={option} />
                <LoginComponent onRegisterClick={handleBluePaneClick} option={option}/>
            </div>
        </div>
    );
}

export default LoginPage;
