import { Header } from "@/components/auth";

export default function AuthLayout({
  children,
  title,
  description,
}: AuthLayoutProps) {
  return (
    <>
    <Header />
    <main className="w-[90%] md:w-[400px] mx-auto space-y-6 mt-10 pb-10">
            
            <div className="">
              <h2 className="text-3xl font-bold text-transparent bg-center bg-clip-text bg-gradient-to-br from-primary-1 to-primary-2">{title}</h2>
              <p className="text-muted text-sm">{description}</p>
            </div>
          
          {children}
          <div className="center">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} Cito Express. All rights
              reserved.
            </p>
          </div>
        </main>
    </>
  );
}
