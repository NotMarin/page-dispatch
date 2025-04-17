"use client";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import MarinDevLogo from "../../../../public/MarinDevLogo";
export function AppSidebarHeader() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <a href="https://github.com/NotMarin" target="_blank">
            <div className="flex aspect-square size-8 items-center justify-center">
              <MarinDevLogo className="text-foreground" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">MarinDev</span>
              <span className="truncate text-xs">Santiago Marin Henao</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
