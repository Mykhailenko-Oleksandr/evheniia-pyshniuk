import { useTranslations } from "next-intl";
import Address from "../Address/Address";
import Logo from "../Logo/Logo";
import css from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={css.footer}>
      <div className="container">
        <Logo footer />
        <Address footer />
        <p className={css.text}>
          &copy;{new Date().getFullYear()}&nbsp;
          {t("textBottom")}
        </p>
      </div>
    </footer>
  );
}
