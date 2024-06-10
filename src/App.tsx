import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";
import { Sidebar } from "./Sidebar/Sidebar";
import { Help } from "./Help/Help";

function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/aaa" element={<LoadingPage />} />
        <Route path="/aaa" element={<Sidebar />} />

        <Route path="/" element={<Help />} />
      </Routes>
    </Suspense>
  );
}

export default App;
