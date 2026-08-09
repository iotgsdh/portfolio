"use client";

import { CloseIcon } from "@/components/icons";
import WorkDetail from "@/components/work-detail";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Modal({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  const router = useRouter();

  return (
    <div className="bg-background fixed top-0 right-0 bottom-0 left-0 z-10 grid place-content-center px-4 pt-12 pb-4">
      <div className="overflow-auto">
        <div className="absolute top-4 right-4">
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
            className="cursor-pointer"
          >
            <CloseIcon />
          </button>
        </div>
        <WorkDetail id={id} />
      </div>
    </div>
  );
}
