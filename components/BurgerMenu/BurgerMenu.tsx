import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleButtons from "../ToggleButtons/ToggleButtons";

interface BurgerMenuProps {
  isOpen: boolean;
}

export default function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    <div className={clsx(css.backdrop, isOpen && css.isOpen)}>
      <div className={css.menu}>
        <Navigation menu={isOpen} />
        <Address menu={isOpen} />

        <ToggleButtons />
      </div>
    </div>
  );
}
