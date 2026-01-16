import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";

export default async function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />

        <button className={css.menuBtn} type="button">
          <svg width={48} height={48}>
            <use href="/icons.svg#menu"></use>
          </svg>
        </button>

        <nav className={css.navigationBox}>
          <Link className={css.linkNav} href="/">
            Ціни
          </Link>
          <Link className={css.linkNav} href="/">
            Проєкти
          </Link>
        </nav>

        <address className={css.addressBox}>
          <Link className={css.linkAddress} href="/">
            <svg width={40} height={40}>
              <use href="/icons.svg#phone"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg>
              <use href="/icons.svg#mail"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg>
              <use href="/icons.svg#telegram"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg>
              <use href="/icons.svg#whatsapp"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg>
              <use href="/icons.svg#instagram"></use>
            </svg>
          </Link>
        </address>
      </div>
    </header>
  );
}
