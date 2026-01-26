import Address from "../Address/Address";
import Logo from "../Logo/Logo";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <Logo footer />
        <Address footer />
        <p className={css.text}>© 2026 Євгенія Пишнюк. Всі права захищені.</p>
      </div>
    </footer>
  );
}
