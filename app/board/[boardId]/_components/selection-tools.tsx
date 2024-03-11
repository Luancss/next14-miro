"use client";

import { memo } from "react";

import {Camera, Color} from "@/types/canvas"

interface SelectionProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(({
  camera,
  setLastUsedColor
}: SelectionProps) => {
  return (
    <div>
      Selection Tools!
    </div>
  )
})

SelectionTools.displayName = "SelectionTools"
