import { Outlet, useLocation } from "react-router-dom";
import ListFlashcards from "./ListFlashcards";
import FloatingButton from "../components/chatbox/FloatingButton";
export default function Flashcard() {
  const location = useLocation();

  // Kiểm tra nếu đang ở route "create"
  const isCreateRoute = location.pathname.endsWith("/create");

  return (
    <div className="w-3/5 mx-auto pt-8">
      {/* Nếu không phải route "create", hiển thị ListFlashcards */}
      {!isCreateRoute && <ListFlashcards />}
      <FloatingButton></FloatingButton>
      {/* Outlet render các route con như "create" */}
      <Outlet />
    </div>
  );
}
