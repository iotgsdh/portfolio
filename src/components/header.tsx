"use client";

import { useRef, useState } from "react";
import { MenuButton } from "./buttons";
import Navigation from "./navigation";
import { useElementSize } from "@/hooks/useElementSize";
import { useCssVariable } from "@/hooks/useCssVariable";
import { useScrollLock } from "@/hooks/useScrollLock";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const height = useElementSize({
    ref: headerRef,
    property: "height",
  });

  useCssVariable({ name: "--header-height", value: `${height}px` });
  useScrollLock(isActive);

  return (
    <header
      ref={headerRef}
      className="border-border bg-background sticky top-0 left-0 grid w-full content-center border-b p-4"
    >
      <MenuButton setIsActive={setIsActive} />
      <Navigation isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
