import { RefObject, useEffect, useState } from "react";

type UseElementSizeProps = {
  ref: RefObject<HTMLElement | null>;
  property: "width" | "height";
};

export function useElementSize({ ref, property }: UseElementSizeProps) {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const updateSize = () => {
      const rect = element.getBoundingClientRect();
      setSize(rect[property]);
    };

    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, property]);

  return size;
}
