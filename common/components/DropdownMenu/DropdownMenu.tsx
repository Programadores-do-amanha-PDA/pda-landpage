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
}
const DropdownMenu = ({ children, anchor, menuItems }: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton
        className={clsx(
          "w-full h-10 rounded-xl border-none bg-gray-700/35 dark:bg-gray-50/35 px-2 text-sm/6 text-gray-50 dark:text-gray-900",
          "items-center justify-between flex transition-all relative"
        )}
      >
        {children}
      </MenuButton>
      <MenuItems
        anchor={anchor}
        className={clsx(
          "w-[var(--button-width)] rounded-xl bg-primary-700 dark:bg-primary-50 [--anchor-gap:var(--spacing-1)] empty:invisible",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 z-10 data-[open]:rounded-t-none m-0 p-0"
        )}
      >
        {menuItems.map((menuItem, i) => (
          <MenuItem key={i}>{menuItem}</MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default DropdownMenu;
