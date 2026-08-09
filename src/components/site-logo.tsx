"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteLogo() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const Wrapper = isHome ? "h1" : "div";

  return (
    <Wrapper>
      <Link href="/" className="font-space-grotesk text-2xl">
        Yuri Toriyama
      </Link>
    </Wrapper>
  );
}
