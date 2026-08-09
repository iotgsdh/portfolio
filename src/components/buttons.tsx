import { Dispatch, SetStateAction } from "react";
import { MenuIcon } from "./icons";

type MenuButtonProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export function MenuButton({ setIsActive }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label="Menu button"
      onClick={() => setIsActive((prev) => !prev)}
      className="cursor-pointer lg:hidden"
    >
      <MenuIcon />
    </button>
  );
}
