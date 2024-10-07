"use client";
import { Column, Modal, Text, Image, Row } from "@common/components";
import { useModal } from "@common/context/modal-context";
import { useEffect, useLayoutEffect } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { CheckIcon } from "@heroicons/react/24/outline";

const WannaSupport = () => {
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

  useLayoutEffect(() => {
    if (isOpen && !successfull) {
      const script = document.createElement("script");
      script.src = "/static/wanna-support-form.js";
      document.head.appendChild(script);
    }
  }, [isOpen, successfull]);

  return (
    <Modal
      title={title ? title : "QUERO APOIAR"}
      isOpen={isOpen}
      onClose={onClose}
    >
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
              Mensagem enviada com sucesso!
            </Text>
            <Text className="text-base">Você será respondido em breve.</Text>
          </Column>
        </Row>
      )}
    </Modal>
  );
};

export default WannaSupport;
