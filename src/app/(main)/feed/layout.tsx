import { Navbar } from "@/components/home/Navbar";
import HomeSidebar from "@/components/feed/home/HomeSidebar";

export default function FeedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar showAvatar />

      <main className="mx-auto grid max-w-[1600px] grid-cols-1 gap-3 px-2 py-5 sm:px-3 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-4 lg:px-4 xl:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <HomeSidebar />
        </aside>

        <section className="min-w-0">{children}</section>
      </main>
    </div>
  );
}
