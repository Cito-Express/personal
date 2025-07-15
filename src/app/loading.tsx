import Image from "next/image";

export default function loading() {
  return (
    <div className="h-[100dvh] center">
        <Image src="/logo-dark.svg" alt="logo" width={40} height={40} className="animate-spin" />
    </div>
  )
}
