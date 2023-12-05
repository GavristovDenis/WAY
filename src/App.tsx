import { useTranslation } from "react-i18next";
import "./App.scss";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LangSwither } from "./LangSwither";

function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<LangSwither />} />
        <Route path="/main" element={<div>{t("Lang")}</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
