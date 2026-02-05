"use client";

import { User } from "@/types/user";
import css from "./UserHeader.module.css";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import clsx from "clsx";

interface UserHeaderProps {
  user: User;
  openModal: () => void;
  isMenu?: boolean;
}

export default function UserHeader({
  user,
  openModal,
  isMenu,
}: UserHeaderProps) {
  return (
    <>
      <div className={css.box}>
        <Link href="/profile" className={css.link}>
          <Image
            src={user.avatar}
            alt="Avatar"
            width={37}
            height={37}
            className={clsx(css.img, isMenu && css.menuImg)}
          />
          <span className={clsx(css.userName, isMenu && css.menuName)}>
            {user.firstName}
          </span>
        </Link>

        <div className={clsx(css.line, isMenu && css.menuLine)}></div>

        <button
          type="button"
          className={css.logoutBtn}
          onClick={openModal}
          aria-label="Вийти з облікового запису"
        >
          <svg width="30" height="30">
            <use href="/icons.svg#logout" />
          </svg>
        </button>
      </div>
    </>
  );
}
