import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LaunchListPage } from "./pages/LaunchListPage";
import "styles/index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/page/1" replace />} />
        <Route path="/page/:pageNumber" element={<LaunchListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
