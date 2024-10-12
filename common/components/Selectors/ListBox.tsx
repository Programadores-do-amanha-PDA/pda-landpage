import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

type Align = "start" | "end";
type Placement = "top" | "right" | "bottom" | "left";
type BaseAnchorProps = {
  /**
   * The `gap` is the space between the trigger and the panel.
   */
  gap: number | string;
  /**
   * The `offset` is the amount the panel should be nudged from its original position.
   */
  offset: number | string;
  /**
   * The `padding` is the minimum space between the panel and the viewport.
   */
  padding: number | string;
};
import { CheckIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Row } from "../Row";
import {} from "@heroicons/react/24/outline";

const ListBox = ({
  itens,
  selectedItems,
  setSelectedItems,
  anchor,
}: {
  itens: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  anchor?:
    | false
    | (`${Placement}` | `${Placement} ${Align}`)
    | Partial<
        BaseAnchorProps & {
          to: `${Placement}` | `${Placement} ${Align}`;
        }
      >;
}) => {
  return (
    <Listbox value={selectedItems} onChange={setSelectedItems} multiple>
      <div className="w-full">
        <ListboxButton
          className={clsx(
            "w-full h-10 rounded-xl border-none bg-gray-700/35 dark:bg-gray-50/35 px-2 text-sm/6 text-gray-50 dark:text-gray-900",
            "items-center justify-between flex data-[open]:rounded-r-none data-[open]:bg-primary-700/35 transition-all relative"
          )}
        >
          <span className="text-sm font-normal">
            {selectedItems.length === 1
              ? selectedItems[0]
              : selectedItems[0].concat(" +", String(selectedItems.length - 1))}
          </span>
          <ChevronRightIcon className="size-5 fill-gray-50/60 group-data-[hover]:fill-gray-50 dark:fill-gray-900/60 dark:group-data-[hover]:fill-gray-900 data-[open]:rotate-180" />
        </ListboxButton>
      </div>

      <ListboxOptions
        anchor={anchor}
        transition
        className={clsx(
          "w-[var(--button-width)] rounded-xl border border-gray-50/5 bg-primary-700 dark:bg-primary-50 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-10 data-[open]:rounded-tl-none"
        )}
      >
        {itens.map((item, i) => (
          <ListboxOption
            key={i}
            value={item}
            className="group flex cursor-pointer items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-primary-500/10"
          >
            <Row
              className={clsx(
                "size-5 p-px rounded-md border border-gray-50 dark:border-gray-900 flex-shrink-0",
                i === 0 && "!rounded-full"
              )}
            >
              {selectedItems.includes(item) && i === 0 && (
                <Row className="bg-gray-50 dark:bg-gray-900 !size-full rounded-full flex-shrink-0" />
              )}

              <CheckIcon
                className={clsx(
                  "size-4 p-px fill-gray-50 dark:fill-gray-900",
                  selectedItems.includes(item) && i !== 0
                    ? "visible"
                    : "invisible"
                )}
              />
            </Row>
            <p className="text-sm/6 text-gray-50 dark:text-gray-900">{item}</p>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
};

export default ListBox;
