"use client";

import { Color } from "@/types/canvas";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

export const ColorPicker = ({
  onChange
}: ColorPickerProps) => {
  return (
    <div
      className="flex flex-wrap gap-2 items-center max-w-[164px]
      pr-2 mr-2 border-r border-neutral-200"
    >
      <ColorButton/>
      <ColorButton/>
      <ColorButton/>
      <ColorButton/>
      <ColorButton/>
    </div>
  )
}

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({
  onClick,
  color
}: ColorButtonProps) => {
  return (
    <div
    >
      Color Button!
    </div>
  )
}