"use client";

import { useLocale } from "next-intl";
import { LanguageListBox } from "@/common/components/Selectors";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const splitPathname = () => {
    const pathParts = pathname.split("/" + locale);
    if (pathParts[1] === "") {
      return "/";
    } else if (pathParts[1] === "/quem-somos" && locale === "pt") {
      return "/who-we-are";
    } else if (pathParts[1] === "/who-we-are" && locale === "en") {
      return "/quem-somos";
    } else if (pathParts[1] === "/contrate-um-talento" && locale === "pt") {
      return "/hire-a-talent";
    } else if (pathParts[1] === "/hire-a-talent" && locale === "en") {
      return "/contrate-um-talento";
    }

    return pathParts[1];
  };

  if (!router) return null;

  const handleLanguageChange = ({ code }: { code: "pt" | "en" }) =>
    code !== locale && router.replace(splitPathname(), { locale: code });

  return (
    <LanguageListBox
      onLanguageChange={handleLanguageChange}
      locale={locale === "pt" || locale === "en" ? locale : "pt"}
    />
  );
};

export default LanguageSwitcher;
