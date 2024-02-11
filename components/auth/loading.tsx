import Image from "next/image";

export const Loading = () => (
  <div className="w-full h-full flex justify-center items-center">
    <Image
      src="/logo.svg"
      alt="loading"
      width={50}
      height={50}
      className="animate-pulse duration-700"
    />
  </div>
)