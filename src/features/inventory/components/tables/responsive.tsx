import { useMediaQuery } from "@uidotdev/usehooks";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ResponsiveTable = ({ data }: any) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <div className="container mx-auto p-3 overflow-y-auto overflow-x-hidden">
        <DataTable data={data} columns={columns} />
      </div>
    );
  }

  return (
    <ScrollArea className="w-screen p-3">
      <DataTable data={data} columns={columns} />
      <ScrollBar orientation="horizontal"/>
    </ScrollArea>
  );
};

export default ResponsiveTable;
