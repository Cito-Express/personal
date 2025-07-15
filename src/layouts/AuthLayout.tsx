import Image from "next/image";

export default function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <div className="h-[100dvh] flex">
      <div className="hidden md:block w-1/3 bg-primary px-10 py-10">
        <div className="h-full flex flex-col justify-between">
          <Image
            src="/full-white-logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <div className="mt-10 space-y-4">
            <h1 className="text-6xl font-bold text-white">
              Personal <br /> Account
            </h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full bg-background overflow-y-scroll py-10 hide-scrollbar">
        <main className="w-[90%] md:w-[480px] mx-auto space-y-6">
          <div className="space-y-6 border-b border-line pb-6">
            <Image
              src="/logo-dark.svg"
              alt="logo"
              width={40}
              height={40}
              className="md:hidden"
            />
            <div className="">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-muted">{description}</p>
            </div>
          </div>
          {children}
          <div className="center">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} Cito Express. All rights
              reserved.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
