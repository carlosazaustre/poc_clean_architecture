import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LaunchListPage } from "./LaunchListPage";
import { HomePage } from "./HomePage";
import "styles/index.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/page/:pageNumber" element={<LaunchListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
