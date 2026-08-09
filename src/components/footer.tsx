"use client";

import { SITE } from "@/constants/site";
import { useCssVariable } from "@/hooks/useCssVariable";
import { useElementSize } from "@/hooks/useElementSize";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  const height = useElementSize({
    ref: footerRef,
    property: "height",
  });

  useCssVariable({ name: "--footer-height", value: `${height}px` });

  return (
    <footer
      ref={footerRef}
      className="border-border bg-background sticky bottom-0 left-0 w-full border-t p-2"
    >
      <small className="block text-end">&copy; {SITE.name}</small>
    </footer>
  );
}
