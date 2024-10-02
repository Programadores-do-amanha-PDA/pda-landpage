import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const ComboBox = ({
  itens,
  query,
  setQuery,
  item,
  setItem,
}: {
  itens: string[];
  query: string;
  setQuery: (query: string) => void;
  item: string | null;
  setItem: (item: string | null) => void;
}) => {
  const filteredItem =
    query === ""
      ? itens
      : itens.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="relative w-full">
      <Combobox
        value={item}
        onChange={(value) => setItem(value)}
        onClose={() => setQuery("")}
        __demoMode
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full h-10 rounded-xl border-none bg-gray-50/35 py-1.5 pr-8 pl-3 text-sm/6 text-gray-50 dark:text-gray-900",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-gray-50/25"
            )}
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <ChevronDownIcon className="size-4 fill-gray-50/60 group-data-[hover]:fill-gray-50 dark:fill-gray-900/60 dark:group-data-[hover]:fill-gray-900" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-xl border border-gray-50/5 bg-primary-50 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {filteredItem.map((item, i) => (
            <ComboboxOption
              key={i}
              value={item}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-50/10"
            >
              <CheckIcon className="invisible size-4 fill-gray-50 dark:fill-gray-900 group-data-[selected]:visible" />
              <div className="text-sm/6 text-gray-50 dark:text-gray-900">
                {item}
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
};

export default ComboBox;
