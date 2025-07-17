import { Header, Sidebar } from "@/components/dashboard";

export default function DashboardLayout({ children, title, description }: DashboardLayoutProps) {
  return (
    <div className="flex">
        <div className="w-[300px] h-[100dvh] bg-red-400 md:block hidden">
            <Sidebar/>
        </div>
        <div className="flex-1 h-[100dvh] overflow-y-scroll hide-scrollbar bg-secondary dark:bg-background">
            <Header />
            <main className="py-6 space-y-6 w-[90%] mx-auto ">
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                   {description && <p className="text-muted">{description}</p>}
                </div>
                <div className="space-y-6">{children}</div>
            </main>
        </div>
    </div>
  )
}
