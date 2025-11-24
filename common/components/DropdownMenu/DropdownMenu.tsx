"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";

type Align = "start" | "end";
type Placement = "top" | "right" | "bottom" | "left";
type BaseAnchorProps = {
  gap: number | string;
  offset: number | string;
  padding: number | string;
};
type AnchorProps =
  | false
  | (`${Placement}` | `${Placement} ${Align}`)
  | Partial<
      BaseAnchorProps & {
        to: `${Placement}` | `${Placement} ${Align}`;
      }
    >;

interface DropdownMenuProps {
  children: React.ReactNode;
  anchor: AnchorProps;
  menuItems: React.ReactNode[];
  ResetDefaultComponent: React.ReactNode;
}
const DropdownMenu = ({
  children,
  anchor,
  menuItems,
  ResetDefaultComponent,
}: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton
        className={clsx(
          "w-max h-10 rounded-xl border-none bg-secondary-700 dark:bg-secondary-100 px-2 text-sm/6 text-gray-50 dark:text-gray-900 relative",
          "items-center justify-between flex transition-all relative data-[open]:rounded-b-none"
        )}
      >
        {children}
      </MenuButton>
      <MenuItems
        anchor={anchor}
        className={clsx(
          "w-max rounded-xl bg-secondary-600 dark:bg-secondary-100 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-10 m-0 p-0 data-[open]:rounded-tr-none shadow-md"
        )}
      >
        {menuItems.map((menuItem, i) => (
          <MenuItem key={i}>{menuItem}</MenuItem>
        ))}

        <hr />
        {ResetDefaultComponent}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
