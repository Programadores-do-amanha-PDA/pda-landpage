"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import { Text } from "../Text";
import { Image } from "../Image";

const languages = [
  { id: 1, code: "pt", label: "Português", flag: "/assets/flags/brazil.png" },
  { id: 2, code: "en", label: "English", flag: "/assets/flags/usa.png" },
];

interface LanguageListBoxProps {
  onLanguageChange: ({ code }: { code: "pt" | "en" }) => void;
  locale: "pt" | "en";
}

export default function LanguageListBox({
  onLanguageChange,
  locale,
}: LanguageListBoxProps) {
  const actualLocale = languages.filter((l) => l.code === locale);
  const [selected, setSelected] = useState(actualLocale[0]);

  const handleSetSelectedLanguage = (language: {
    id: number;
    code: "pt" | "en";
    label: string;
    flag: string;
  }) => {
    setSelected(language);
    onLanguageChange(language);
  };

  return (
    <Listbox value={selected} onChange={handleSetSelectedLanguage}>
      <ListboxButton
        className={clsx(
          "relative flex gap-2 w-36 h-10 rounded-lg  bg-gray-400 dark:bg-gray-600 py-1.5 pr-8 pl-3 text-left text-sm/6  text-gray-50 dark:text-gray-900",
          "data-[open]:rounded-b-none data-[open]:bg-gray-400/80 data-[open]:dark:bg-gray-600/80"
        )}
      >
        <Image
          src={selected.flag}
          alt=""
          height={100}
          width={200}
          className="size-7 rounded-full"
        />
        <Text className="text-sm/6 text-gray-900 dark:text-gray-50 font-bold">
          {selected.label}
        </Text>
        <ChevronDownIcon
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4 text-gray-900 dark:text-gray-50"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-gray-50/5 bg-gray-400 dark:bg-gray-600 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50 data-[open]:rounded-t-none p-2 flex flex-col gap-2"
        )}
        anchor="bottom end"
      >
        {languages.map((language) => (
          <ListboxOption
            key={language.code}
            value={language}
            className="group flex items-center gap-2 rounded-lg py-1.5 px-1 select-none data-[selected]:bg-gray-50/30 cursor-pointer"
          >
            <Image
              src={language.flag}
              alt=""
              height={100}
              width={200}
              className="size-7 rounded-full"
            />
            <Text className="text-sm/6 text-gray-900 dark:text-gray-50 font-bold">
              {language.label}
            </Text>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
