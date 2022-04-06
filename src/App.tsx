import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./components/search/SearchPage";
import DashboardPageContainer from "./components/dashboard/DashboardPageContainer";
import "./styles/App.css";

const App: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SearchPage />} />
        <Route path="/dashboard/:uid" element={<DashboardPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
