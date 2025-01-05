import React from "react";
import { LayoutProps } from "../types/layout.props";
import { AppSidebar } from "../components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <section className="grid grid-cols-7 font-inter">
        <AppSidebar />

        <main className="col-span-5">
          <SidebarTrigger />
          <div className="p-3">{children}</div>
        </main>

      </section>
    </SidebarProvider>
  );
};

export default AppLayout;
