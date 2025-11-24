"use client";

import React from "react";
import { createPortal } from "react-dom";

import { Row, Column, Text } from "@common/components";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
      className={`top-0 left-0 fixed m-auto w-full h-screen items-center justify-center bg-black/70 px-6 md:px-8  ${
        isOpen ? "z-40" : "hidden  opacity-0"
      } `}
    >
      <Column
        className="p-7 rounded-xl bg-secondary-630 items-center"
        {...props}
      >
        <Row className="h-12 w-full mb-5 justify-between items-center">
          <Row className="w-5 hidden md:block" />
          <Text className="text-lg font-dela-gothic text-gray-50">{title}</Text>
          <Row onClick={onClose} className="cursor-pointer">
            <XMarkIcon className="size-6 text-gray-50" strokeWidth={4} />
          </Row>
        </Row>
        {children}
      </Column>
    </Row>,
    portalRef
  );
};

export default Modal;
