import { Outlet } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <div className="min-h-screen">
      <LeftBar />
      <Outlet />
      <RightBar />
      <Footer />
    </div>
  );
}

export default AppLayout;
