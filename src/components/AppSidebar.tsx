import { NavLink } from "react-router";
import { menuItems } from "./sidebar/menu-items";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Momotus Evolv</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {
                menuItems.map(({icon: Icon, title, url}) => (
                  <SidebarMenuItem key={title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={url}>
                        <Icon />
                        <span>{title}</span>

                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
