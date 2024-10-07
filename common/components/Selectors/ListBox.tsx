import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const ListBox = ({
  itens,
  selectedItems,
  setSelectedItems,
}: {
  itens: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
}) => {
  return (
    <div className="relative w-full">
      <Listbox value={selectedItems} onChange={setSelectedItems} multiple>
        <div className="relative w-full">
          <ListboxButton
            className={clsx(
              "w-full h-10 rounded-xl border-none bg-gray-700/35 dark:bg-gray-50/35 px-2 text-sm/6 text-gray-50 dark:text-gray-900",
              "items-center justify-between flex"
            )}
          >
            <span className="text-sm font-normal">
              {selectedItems.join(", ")}
            </span>
            <ChevronDownIcon className="size-4 fill-gray-50/60 group-data-[hover]:fill-gray-50 dark:fill-gray-900/60 dark:group-data-[hover]:fill-gray-900" />
          </ListboxButton>
        </div>

        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-xl border border-gray-50/5 bg-gray-700 dark:bg-primary-50 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {itens.map((item, i) => (
            <ListboxOption
              key={i}
              value={item}
              className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-50/10"
            >
              <CheckIcon
                className={clsx(
                  "size-4 fill-gray-50 dark:fill-gray-900",
                  selectedItems.includes(item) ? "visible" : "invisible"
                )}
              />
              <p className="text-sm/6 text-gray-50 dark:text-gray-900">
                {item}
              </p>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default ListBox;
