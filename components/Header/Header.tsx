// "use client";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

export default function Header() {
  // const router = useRouter();

  // const { locale, pathname, asPath, query } = router;

  // const t = locale === "en" ? "Hello" : "Привіт";

  // function click() {
  //   router.push({ pathname, query }, asPath, { locale: "en" });
  // }

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
            {"t"}
          </Link>
          <Link className={css.linkNav} href="/">
            Проєкти
          </Link>
        </nav>

        <address className={css.addressBox}>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#phone"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#mail"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#telegram"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#whatsapp"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#instagram"></use>
            </svg>
          </Link>
        </address>

        {/* <div>
          <button type="button" onClick={click}>
            en
          </button>
        </div> */}
        {/* <Link href="/" locale="en">
          en
        </Link>
        <Link href="/" locale="uk">
          uk
        </Link> */}
      </div>
    </header>
  );
}
