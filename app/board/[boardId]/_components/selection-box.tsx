"use client";

import { memo } from "react";

interface SelectionBoxProps {
  onResizeHandlePointerDown: () => void;
};

export const SelectionBox = memo(({ onResizeHandlePointerDown }: SelectionBoxProps) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      onPointerDown={onResizeHandlePointerDown}
    >
      
    </div>
  );
})