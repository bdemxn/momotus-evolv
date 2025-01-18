import { NavLink } from "react-router";
import { menuItems } from "./sidebar/menu-items";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronUp, LogOut, User2 } from "lucide-react";

export const AppSidebar = () => {
  return (
    <Sidebar className="h-full z-50 font-semibold dark:border-[#181818]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-inter font-bold mb-4">
            Momotus Evolv
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(({ icon: Icon, title, url }) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={url}>
                      <Icon />
                      <span>{title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Kevin Bonilla
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span className="font-inter">Cuenta Momotus</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="font-inter">Soporte</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="login" className="font-inter text-red-600 flex w-full justify-around items-center">
                    Cerrar Sesión
                    <LogOut className="ml-auto text-red-600 w-4" />
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
