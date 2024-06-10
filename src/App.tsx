import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";

function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/aaa" element={<LoadingPage />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Suspense>
  );
}

export default App;
