import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logoBox}>
      <svg className={css.logoIcon} width={32} height={32}>
        <use href="/icons.svg#logo"></use>
      </svg>
      <div className={css.nameBox}>
        <p className={css.firstName}>Yevheniia</p>
        <p className={css.lastName}>Pyshniuk</p>
      </div>
    </div>
  );
}
