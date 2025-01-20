import { useMediaQuery } from "@uidotdev/usehooks";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useInventoryView } from "@/hooks/useInventoryView";

const ResponsiveTable = () => {
  const { inventoryList } = useInventoryView();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    console.log(inventoryList)
    return (
      <div className="container mx-auto w-full h-[750px] p-3 overflow-y-auto overflow-x-hidden">
        <DataTable data={inventoryList} columns={columns} />
      </div>
    );
  }

  return (
    <ScrollArea className="w-screen p-3">
      <DataTable data={inventoryList} columns={columns} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default ResponsiveTable;
