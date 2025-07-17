import { DashboardLayout } from "@/layouts";

export default function Dashboard() {
  return (
    <>
      <DashboardLayout
        title="Hi, Gift Jacksun"
        description="Send, receive and track your shipments"
      >
        <div className="dark:bg-foreground border border-line rounded-lg animate-pulse bg-background h-30"></div>
        <div className="dark:bg-foreground border border-line rounded-lg animate-pulse bg-background h-30"></div>
        <div className="dark:bg-foreground border border-line rounded-lg animate-pulse bg-background h-30"></div>
        <div className="dark:bg-foreground border border-line rounded-lg animate-pulse bg-background h-30"></div>
        <div className="dark:bg-foreground border border-line rounded-lg animate-pulse bg-background h-30"></div>
        <div className="dark:bg-foreground border border-line rounded-lg animate-pulse bg-background h-30"></div>
      </DashboardLayout>
    </>
  );
}
