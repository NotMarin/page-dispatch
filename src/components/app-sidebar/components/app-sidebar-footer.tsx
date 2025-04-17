"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function AppSidebarFooter() {
  const { setTheme, theme } = useTheme();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <a href="https://github.com/NotMarin/page-dispatch" target="_blank">
            <Github />
            <span>Ir al repositorio</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <div className="cursor-pointer">
            <Sun className="dark:hidden" size={16} />
            <Moon className="hidden dark:block" size={16} />
            <span className="truncate">Cambia el tema</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
