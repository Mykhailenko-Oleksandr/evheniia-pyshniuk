import Address from "../Address/Address";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className="container">
        <Logo footer />
        <div>
          {/* <Navigation /> */}
          <Address />
        </div>
        <p>© 2026 Євгенія Пишнюк. Всі права захищені.</p>
      </div>
    </footer>
  );
}
