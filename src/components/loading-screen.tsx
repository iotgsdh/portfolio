"use client";

import { useScrollLock } from "@/hooks/useScrollLock";
import { useEffect, useState } from "react";

export default function LoadingScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean | null>(null);

  useScrollLock(loading);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("visited");

    function initializeLoading() {
      if (hasVisited) {
        setLoading(false);
        return;
      }

      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("visited", "true");
      }, 4000);

      return () => clearTimeout(timer);
    }

    return initializeLoading();
  }, []);

  if (loading === null) {
    return null;
  }

  if (loading) {
    return (
      <div className="animate-fade-out fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <span className="font-space-grotesk text-4xl">Portfolio</span>
      </div>
    );
  }

  return children;
}
