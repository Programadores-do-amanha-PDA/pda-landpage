"use client";

import { Column, Modal, Text, Row } from "@common/components";
import { useModal } from "@common/context/modal-context";
import { useEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const WannaSupport = () => {
  const t = useTranslations("WannaSupport");

  const { push } = useRouter();
  const searchParams = useSearchParams();

  const { isOpen, setIsOpen, title } = useModal();

  const successfull = searchParams.get("successfull");

  useEffect(() => {
    setIsOpen(!!successfull);
  }, [successfull, setIsOpen]);

  const onClose = () => {
    setIsOpen(false);
    if (!!successfull) {
      push("/");
    }
  };

  useEffect(() => {
    if (isOpen && !successfull) {
      const script = document.createElement("script");
      script.src = "/static/wanna-support-form.js";
      document.head.appendChild(script);
    }
  }, [isOpen, successfull]);

  return (
    <Modal title={title ? title : t("title")} isOpen={isOpen} onClose={onClose}>
      {!successfull ? (
        isOpen && (
          <Column
            className="h-[474px] w-full md:w-[500px]"
            id="wanna-support-form"
          />
        )
      ) : (
        <Row className="items-center justify-center gap-6">
          <CheckIcon className="h-12 w-12 text-green-500 stroke-2" />

          <Column>
            <Text className="text-lg font-ibm-plex-sans !font-bold mt-[50] mb-2">
              {t("successTitle")}
            </Text>
            <Text className="text-base">{t("successMessage")}</Text>
          </Column>
        </Row>
      )}
    </Modal>
  );
};

export default WannaSupport;
