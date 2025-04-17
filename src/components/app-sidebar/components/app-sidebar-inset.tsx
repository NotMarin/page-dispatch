"use client";

import { usePathname } from "next/navigation";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { items } from "../app-sidebar";

interface AlgorithmLayoutProps {
  children: React.ReactNode;
}

export function AppSidebarInset({ children }: AlgorithmLayoutProps) {
  const pathname = usePathname();

  const current = items.find((item) => item.url === pathname);
  const title = current?.title || "Algoritmo";

  return (
    <SidebarInset>
      <header className="sticky h-16 top-0 flex shrink-0 items-center gap-2 border-b p-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </header>
      <section className="p-6 flex-1">{children}</section>
    </SidebarInset>
  );
}
