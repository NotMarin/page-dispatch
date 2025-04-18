import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ArrowDownUp,
  ArrowRightFromLine,
  CircleFadingArrowUp,
  Clock,
  ClockArrowUp,
  Home,
  Repeat,
} from "lucide-react";
import { AppSidebarHeader } from "./components/app-sidebar-header";
import AppSidebarFooter from "./components/app-sidebar-footer";

export const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "FiFo",
    url: "/fifo",
    icon: ArrowDownUp,
  },
  {
    title: "Óptimo",
    url: "/optimal",
    icon: ClockArrowUp,
  },
  {
    title: "LRU",
    url: "/lru",
    icon: ArrowRightFromLine,
  },
  {
    title: "FiFo+",
    url: "/fifo+",
    icon: CircleFadingArrowUp,
  },
  {
    title: "Reloj",
    url: "/clock",
    icon: Clock,
  },
  {
    title: "Segunda Oportunidad",
    url: "/second-chance",
    icon: Repeat,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="truncate">
            Algoritmos de reemplazo de página
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
