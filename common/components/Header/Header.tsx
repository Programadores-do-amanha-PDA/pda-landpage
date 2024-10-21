"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import { Image, Button, Row, Column, InternalLink } from "@common/components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const buttonMenuDesktopStyle =
  "text-gray-900 dark:text-gray-50 w-max mx-0 font-md font-roboto font-semibold";
const buttonMenuDeviceStyle =
  "w-full text-start p-0 mx-0 font-normal text-gray-900 dark:text-gray-50 h-10 flex items-center justify-center font-semibold";

const deviceMenuCss =
  "h-full flex-col !justify-start gap-4 flex overflow-y-none";
const desktopMenuCss =
  "h-20 !justify-start flex-col sm:flex-row overflow-y-none sm:gap-6";

const Header = () => {
  const t = useTranslations("header");

  const [deviceMenuOpen, setDeviceMenuOpen] = useState(false);

  const buttonStyle = deviceMenuOpen
    ? buttonMenuDeviceStyle
    : buttonMenuDesktopStyle;

  const handleSubscribe = () => {
    window.open("https://forms.gle/Sf93Zf5QmvASRFLp9");
  };

  return (
    <Row className="w-full min-h-20 sticky top-0 left-0 sm:h-20 items-start justify-center z-50 bg-gray-50 dark:bg-secondary-900">
      <Row
        className={`
        h-20 w-full bg-gray-50 dark:bg-secondary-900 transition-all top-0 max-w-7xl fixed sm:!justify-between  px-6 lg:px-8 xl:px-0 items-center z-50  ${
          deviceMenuOpen ? deviceMenuCss : desktopMenuCss
        }`}
      >
        <Row className="flex w-full sm:w-max  justify-between z-10 self-center">
          <Row className="w-full sm:w-max flex justify-between items-center h-20 relative top-0 left-0">
            <InternalLink className="cursor-pointer size-10" href="/">
              <Image
                className="block dark:hidden"
                src="/assets/simbolo_pda_fundo_branco.png"
                alt="Programadores do Amanhã. logo"
                width={100}
                height={100}
              />

              <Image
                className="dark:block hidden"
                src="/assets/simbolo_pda_fundo_roxo.png"
                alt="Programadores do Amanhã. logo"
                width={100}
                height={100}
              />
            </InternalLink>

            <Column
              className={`flex ${
                !deviceMenuOpen && "sm:hidden"
              }  items-center justify-center rounded-xl size-10 ease-in-out transition-all delay-75`}
              onClick={() => setDeviceMenuOpen(!deviceMenuOpen)}
            >
              {deviceMenuOpen ? (
                <XMarkIcon
                  aria-label="Fechar menu."
                  className="size-8 stroke-2"
                />
              ) : (
                <Bars3Icon aria-label="Menu." className="size-8 stroke-2" />
              )}
            </Column>
          </Row>
        </Row>

        <Column
          className={` justify-between w-full h-full sm:flex-row ${
            deviceMenuOpen
              ? "gap-5 py-4 flex flex-col items-center"
              : "gap-5 py-0 hidden sm:flex items-center my-0"
          }`}
        >
          <Column className="sm:flex-row w-full sm:w-max gap-5">
            <InternalLink className={buttonStyle} href={"/"}>
              {t("home.title")}
            </InternalLink>
            <InternalLink className={buttonStyle} href={t("whoWeAre.href")}>
              {t("whoWeAre.title")}
            </InternalLink>
            <InternalLink className={buttonStyle} href={t("transparency.href")}>
              {t("transparency.title")}
            </InternalLink>
          </Column>

          <Column className="sm:flex-row w-full sm:w-max gap-4 ">
            <Button
              className={`${buttonStyle} p-1 px-2 w-full relative items-center bg-primary-500 rounded-xl gap-2 !text-gray-900 hover:shadow-sm`}
              onClick={handleSubscribe}
            >
              {t("subscribe.title")}
            </Button>
            <InternalLink
              href={t("hireATalent.href")}
              className={`${buttonStyle} p-1 px-2 w-full relative items-center border-2 border-secondary-500 hover:bg-secondary-500/55 rounded-xl shadow-sm`}
            >
              {t("hireATalent.title")}
            </InternalLink>
          </Column>
        </Column>

        {/* <Registration deviceMenuOpen={deviceMenuOpen} /> */}
      </Row>
    </Row>
  );
};

export default Header;
