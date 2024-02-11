import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      This is a screen for authenticated users only
      <div>
        <UserButton/>
      </div>
    </div>
  )
}
