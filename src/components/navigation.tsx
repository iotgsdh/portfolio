"use client";

import { useHorizontalSwipe } from "@/hooks/useHorizontalSwipe";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const items = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },
  {
    id: 3,
    path: "/skills",
    label: "Skills",
  },
  {
    id: 4,
    path: "/works",
    label: "Works",
  },
];

type NavigationProps = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export default function Navigation({ isActive, setIsActive }: NavigationProps) {
  const pathname = usePathname();
  const { onPointerDown, onPointerUp, onPointerCancel } = useHorizontalSwipe({
    threshold: 50,
    onSwipeLeft: () => setIsActive(false),
  });

  return (
    <>
      {/* sp, tablet */}
      <nav
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        onClick={() => setIsActive(false)}
        style={{
          touchAction: "pan-y",
        }}
        className={`fixed top-(--header-height) bottom-(--footer-height) left-0 w-full transition-[translate] duration-(--duration) lg:hidden ${!isActive && "-translate-x-full"}`}
      >
        <ul className="bg-background border-border grid h-full w-[75%] content-center gap-y-4 border-e p-4">
          {items.map((item) => {
            const isActive =
              pathname === item.path ||
              (pathname.startsWith("/works") && item.path === "/works");

            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`font-space-grotesk border-border text-base ${isActive && "border-primary border-b underline-offset-(--underline-offset)"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* pc */}
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-x-8">
          {items.map((item) => {
            const isActive =
              pathname === item.path ||
              (pathname.startsWith("/works") && item.path === "/works");

            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`font-space-grotesk text-base ${isActive && "border-primary border-b underline-offset-(--underline-offset)"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
