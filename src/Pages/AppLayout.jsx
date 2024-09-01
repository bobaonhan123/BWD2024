import { Outlet } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <LeftBar />
      <Outlet />
      <RightBar />
    </div>
  );
}

export default AppLayout;
