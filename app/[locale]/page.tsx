import Link from "next/link";
import css from "./Home.module.css";
import { Locale, useTranslations } from "next-intl";
// import { setRequestLocale } from "next-intl/server";
// import { use } from "react";

export default function Home({ params }: PageProps<"/[locale]">) {
  // const { locale } = use(params);

  // Enable static rendering
  // setRequestLocale(locale as Locale);

  const t = useTranslations("HomePage");

  return (
    <section>
      <div className="container">
        <h1>{t("title")}</h1>
      </div>

      {/* <Link href={switchPath}>{otherLocale.toUpperCase()}</Link> */}
    </section>
  );
}
