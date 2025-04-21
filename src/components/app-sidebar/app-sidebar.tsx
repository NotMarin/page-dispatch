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
  MessageCircleQuestion,
  Repeat,
  Shapes,
} from "lucide-react";
import { AppSidebarHeader } from "./components/app-sidebar-header";
import AppSidebarFooter from "./components/app-sidebar-footer";
import Link from "next/link";

export const sidebarSections = {
  inicio: [
    {
      title: "Inicio",
      url: "/",
      icon: Home,
    },
    {
      title: "Hablemos de ellos",
      url: "/replacements-algorithms",
      icon: MessageCircleQuestion,
    },
    {
      title: "Anomalía de Belady",
      url: "/belady-anomaly",
      icon: Shapes,
    },
  ],
  sinSegundaOportunidad: [
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
  ],
  conSegundaOportunidad: [
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
      title: "2da Oportunidad",
      url: "/second-chance",
      icon: Repeat,
    },
  ],
};

function SidebarMenuList({
  items,
}: {
  items: typeof sidebarSections.sinSegundaOportunidad;
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

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
            <SidebarMenuList items={sidebarSections.inicio} />
          </SidebarGroupContent>

          <SidebarGroupLabel className="truncate">
            Sin segunda oportunidad
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuList items={sidebarSections.sinSegundaOportunidad} />
          </SidebarGroupContent>

          <SidebarGroupLabel className="truncate">
            Con segunda oportunidad
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenuList items={sidebarSections.conSegundaOportunidad} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <AppSidebarFooter />
      </SidebarFooter>
    </Sidebar>
  );
}
