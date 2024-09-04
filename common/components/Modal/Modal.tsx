import React from "react";
import { createPortal } from "react-dom";

import { Row, Column, Text, Image } from "@common/components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: any;
}

const Modal = ({ isOpen, onClose, title, children, ...props }: ModalProps) => {
  if (typeof window === "undefined") {
    return null;
  }

  const portalRef = document?.body;

  return createPortal(
    <Row
      className={` top-0 left-0 w-full h-screen items-center justify-center bg-black/70  ${
        isOpen ? "z-50 visible  opacity-100" : "hidden  opacity-0"
      } `}
    >
      <Column className="p-7 rounded-xl bg-purple-400 items-center" {...props}>
        <Row className="h-12 w-full mb-5 justify-between items-center">
          <Row className="w-5 hidden md:block" />
          <Text className="text-lg">{title}</Text>
          <Image src="/assets/close.svg" alt="close" onClick={onClose} />
        </Row>
        {children}
      </Column>
    </Row>,
    portalRef
  );
};

export default Modal;
