import React from "react";
import { Link } from "react-router-dom";
import { Lang } from "./types";
import { useTranslation } from "react-i18next";

export const LangSwitcherMain = () => {
  const { i18n } = useTranslation();

  const toggle = (lang: Lang) => i18n.changeLanguage(lang);

  return (
    <div className="App">
      <div className="appWrapper">
        <div className="langButton" onClick={() => toggle("ru")}>
          <Link className="link" to="/main">
            Русский
          </Link>
        </div>
        <div className="langButton" onClick={() => toggle("en")}>
          <Link className="link" to="/main">
            English
          </Link>
        </div>
      </div>
    </div>
  );
};
