"use client";

import { usePathname } from "next/navigation";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { items } from "../app-sidebar";
import { useMemo } from "react";

interface AlgorithmLayoutProps {
  children: React.ReactNode;
}

export function AppSidebarInset({ children }: AlgorithmLayoutProps) {
  const pathname = usePathname();

  const current = useMemo(
    () => items.find((item) => item.url === pathname),
    [pathname]
  );
  const title = useMemo(() => {
    if (current?.title === "Inicio") return "Inicio";
    return `Algoritmo ${current?.title}`;
  }, [current]);

  return (
    <SidebarInset>
      <header className="bg-background sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b p-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </header>
      <section className="flex flex-1 flex-col p-6">{children}</section>
    </SidebarInset>
  );
}
