import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing/LandingPage";
import SearchPage from "./components/search/SearchPage";
import DashboardPage from "./components/dashboard/DashboardPage";

const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard/:uid" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;