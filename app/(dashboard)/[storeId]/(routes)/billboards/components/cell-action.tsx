"use client";

import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BillboardColumn } from "./columns";
import { Button } from "@/components/ui/button";

interface CellAction {
  data: BillboardColumn
}

export const CellAction: React.FC<CellAction> = () => {
  return <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <span className="sr-only">
            Open menu
          </span>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  </div>;
};
