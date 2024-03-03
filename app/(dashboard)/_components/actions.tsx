"use client"

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu"

interface ActionProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionProps) => {
  return (
    <div>
    Actions!
    </div>
  )
} 