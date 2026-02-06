"use client";

import { MouseEvent, useEffect } from "react";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => Promise<void> | void;
  onClose: () => void;
}

export default function Modal({ isOpen, onConfirm, onClose }: ModalProps) {
  const tAriaLabel = useTranslations("ariaLabel");
  const t = useTranslations("modal");

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.body.classList.add("noScroll");
      window.addEventListener("keydown", onEsc);
    } else {
      document.body.classList.remove("noScroll");
    }

    return () => {
      document.body.classList.remove("noScroll");
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, onClose]);

  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <button
          className={css.closeBtn}
          onClick={onClose}
          aria-label={tAriaLabel("closeModalBtn")}
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use href="/icons.svg#close" />
          </svg>
        </button>

        <h2 className={css.title}>{t("title")}</h2>

        <div className={css.buttonsBox}>
          <button type="button" className={css.acceptBtn} onClick={onConfirm}>
            {t("acceptBtn")}
          </button>
          <button type="button" className={css.cancelBtn} onClick={onClose}>
            {t("cancelBtn")}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
