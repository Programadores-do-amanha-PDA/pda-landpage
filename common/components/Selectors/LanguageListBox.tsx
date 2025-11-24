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
  { id: 1, code: "pt" as const, label: "Português", flag: "/assets/flags/brazil.png" },
  { id: 2, code: "en" as const, label: "English", flag: "/assets/flags/usa.png" },
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
          "relative flex items-center gap-2 mdx:w-36 h-10 rounded-xl  bg-gray-400 dark:bg-gray-600 py-1.5 pr-8 pl-3 text-left text-sm/6  text-gray-50 dark:text-gray-900",
          "data-[open]:mdx:rounded-b-none data-[open]:mdx:rounded-t-xl data-[open]:rounded-t-none data-[open]:bg-gray-400/80 data-[open]:dark:bg-gray-600/80"
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
          className="group pointer-events-none absolute top-0 bottom-0 my-auto right-2.5 size-4 text-gray-900 dark:text-gray-50 mdx:rotate-0 rotate-180"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-gray-50/5 bg-gray-400 dark:bg-gray-600 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-50 p-2 flex flex-col gap-2",
          "data-[open]:rounded-b-none data-[open]:rounded-t-xl data-[open]:mdx:rounded-t-none data-[open]:mdx:rounded-b-xl"
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
