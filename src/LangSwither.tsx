import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
type Lang = "ru" | "en";

export const LangSwither = () => {
  const { i18n } = useTranslation();

  const toggle = (lang: Lang) => i18n.changeLanguage(lang);

  return (
    <div className="App">
      <div onClick={() => toggle("ru")}>
        <Link className="link" to="/main">
          Русский
        </Link>
      </div>
      <div onClick={() => toggle("en")}>
        <Link className="link" to="/main">
          English
        </Link>
      </div>
    </div>
  );
};
