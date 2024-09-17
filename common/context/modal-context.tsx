"use client";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { ScriptProps } from "next/script";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = React.createContext<IModalContext>({} as IModalContext);

const ModalProvider: React.FC<ScriptProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }} {...props}>
      {props.children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export { ModalProvider, useModal };
