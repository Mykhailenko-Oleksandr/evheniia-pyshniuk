import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logoBox}>
      <svg width={32} height={32}>
        <use href="/icons.svg#logo"></use>
      </svg>
      <div>
        <p>Yevheniia</p>
        <p>Pyshniuk</p>
      </div>
    </div>
  );
}
