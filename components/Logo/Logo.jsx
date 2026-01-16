import Link from "next/link";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <Link
      className={css.logoBox}
      href="/">
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
