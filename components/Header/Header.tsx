"use client";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleLanguageBtn from "../ToggleLanguageBtn/ToggleLanguageBtn";

export default function Header() {
  const t = useTranslations("ariaLabel");

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />
        <button className={css.menuBtn} type="button" aria-label={t("menuBtn")}>
          <svg width={48} height={48}>
            <use href="/icons.svg#menu"></use>
          </svg>
        </button>
        <Navigation />
        <Address />

        <ToggleLanguageBtn />
      </div>
    </header>
  );
}
