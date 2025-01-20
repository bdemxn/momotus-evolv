import React from "react";
import { LayoutProps } from "../types/layout.props";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/provider/theme-provider";
import { Rightbar } from "@/components/right-bar";

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <section className="flex font-inter">
          <AppSidebar />

          <main>
            <SidebarTrigger className="dark:text-white" />

            <div>{children}</div>
          </main>
        </section>
        <Rightbar />
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
