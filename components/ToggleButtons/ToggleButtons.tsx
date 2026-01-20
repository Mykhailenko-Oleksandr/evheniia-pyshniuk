import css from "./ToggleButtons.module.css";
import ToggleLanguageBtn from "../ToggleLanguageBtn/ToggleLanguageBtn";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";

export default function ToggleButtons() {
  return (
    <div className={css.toggleBtnBox}>
      <ToggleThemeBtn />
      <ToggleLanguageBtn />
    </div>
  );
}
