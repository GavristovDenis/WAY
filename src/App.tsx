import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingPage } from "./LoadingPage/LoadingPage";

function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/aaa" element={<LoadingPage />} />
        <Route path="/" element={<LoadingPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
