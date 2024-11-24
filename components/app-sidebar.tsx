import Image from "next/image"
import { Inbox, ChartGantt, LayoutDashboardIcon, BellIcon, Users } from "lucide-react"
import Logo from "@/public/clientyne-logo.svg"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarInput,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"


// Menu items.
const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: BellIcon,
  },
  {
    title: "Marketplace",
    url: "/marketplace",
    icon: Inbox,
  },
  {
    title: "Clients",
    url: "/clients",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartGantt,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center space-x-1 pt-8 pb-4 px-4 bg-[#F5F5F5] h-20">
            <Image src={Logo} alt="Clientyne's Logo" className="w-8 h-8" />
            <p className="font-onest font-extrabold text-base lg:text-xl text-[#3D3D3D]">Clientyne</p>
          </SidebarGroupLabel>
          <SidebarGroupContent className="mt-3 px-4 lg:mt-6">
            <SidebarMenu>
              {menuItems.map((item) => (
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
    </Sidebar>
  )
}
