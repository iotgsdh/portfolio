import { useRef } from "react";

type Params = {
  threshold?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
};

export const useHorizontalSwipe = ({
  threshold = 60,
  onSwipeLeft,
  onSwipeRight,
}: Params = {}) => {
  const startX = useRef(0);
  const startY = useRef(0);
  const isSwiping = useRef(false);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    isSwiping.current = true;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isSwiping.current) return;

    const diffX = e.clientX - startX.current;
    const diffY = e.clientY - startY.current;

    isSwiping.current = false;

    // 縦スクロール優先
    if (Math.abs(diffY) > Math.abs(diffX)) return;

    if (diffX < -threshold) {
      onSwipeLeft?.();
    }

    if (diffX > threshold) {
      onSwipeRight?.();
    }
  };

  const onPointerCancel = () => {
    isSwiping.current = false;
  };

  return {
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  };
};
