import css from "./Header.module.css";
import Logo from '../Logo/Logo'

export default async function Header() {
  return (
    <header className={css.header}>
      <div className="container">
<Logo/>
      </div>
    </header>
  );
}
