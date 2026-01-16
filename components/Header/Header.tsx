import css from "./Header.module.css";
import Logo from "../Logo/Logo";

export default async function Header() {
  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />

        <button
          className={css.menuBtn}
          type="button">
          <svg
            width={48}
            height={48}>
            <use href="/icons.svg#menu"></use>
          </svg>
        </button>
      </div>
    </header>
  );
}
