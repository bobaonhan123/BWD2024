import { Outlet } from "react-router-dom";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Footer from "../components/Footer";
import Protect from "./Protect";
import { useLoginStore } from "../store/store";

function AppLayout() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  return (
    <div className="min-h-screen">
      <LeftBar />
      <Outlet />
      <RightBar />
      <Footer />
      {isLoggedIn === false && <Protect />}
    </div>
  );
}

export default AppLayout;
