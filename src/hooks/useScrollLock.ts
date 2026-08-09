"use client";

import { useEffect } from "react";

export function useScrollLock(isLocked: boolean | null) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}
