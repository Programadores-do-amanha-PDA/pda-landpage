"use client";

import { usePathname } from "@/i18n/routing";
import { Mixpanel } from "@/utils/Mixpanel";
import { useLocale } from "next-intl";
import { useEffect } from "react";

interface PageViewComponentProps {
  pageName: string;
}

const PageViewComponent = ({ pageName }: PageViewComponentProps) => {
  const path = usePathname();
  const locale = useLocale();

  useEffect(() => {
    Mixpanel.track("Page View", {
      pageName: pageName,
      path: path,
      locale: locale,
    });
  }, [locale, pageName, path]);

  return <></>;
};
export default PageViewComponent;
