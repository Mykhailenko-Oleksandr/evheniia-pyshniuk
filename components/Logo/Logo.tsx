import { Link } from "@/i18n/navigation";
import css from "./Logo.module.css";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface LogoProps {
  closeMenu?: () => void;
  footer?: boolean;
}

export default function Logo({ closeMenu, footer }: LogoProps) {
  const t = useTranslations("ariaLabel");

  return (
    <Link
      onClick={closeMenu}
      className={clsx(css.logoLink, footer && css.linkFooter)}
      href="/"
      aria-label={t("logotype")}>
      <svg
        className={css.logoIcon}
        width={48}
        height={48}>
        <use href="/icons.svg#logo"></use>
      </svg>
      <div className={css.nameBox}>
        <p className={css.firstName}>Yevheniia</p>
        <p className={css.lastName}>Pyshniuk</p>
      </div>
    </Link>
  );
}
