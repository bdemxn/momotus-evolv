import React from "react";
import { LayoutProps } from "../types/layout.props";
import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <section className="flex h-screen font-inter">
        <AppSidebar />

        <main>
          <SidebarTrigger />

          <div className="w-full">{children}</div>
        </main>
      </section>
    </SidebarProvider>
  );
};

export default AppLayout;
