"use client";

import React, {
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { ScriptProps } from "next/script";

interface IModalContext {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const ModalContext = React.createContext<IModalContext>({} as IModalContext);

const ModalProvider: React.FC<ScriptProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("QUERO APOIAR");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    try {
      if (isOpen) {
        disableBodyScroll(document.body);
      } else {
        enableBodyScroll(document.body);
      }
    } catch (error) {
      console.error("Error managing body scroll:", error);
    }
  }, [isOpen, isMounted]);

  useEffect(() => {
    return () => {
      try {
        clearAllBodyScrollLocks();
      } catch (error) {
        console.error("Error clearing body scroll locks:", error);
      }
    };
  }, []);

  return (
    <ModalContext.Provider
      value={{ isOpen, setIsOpen, title, setTitle }}
      {...props}
    >
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
