"use client";

import { MoreHorizontal } from "lucide-react";

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
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">
            Open menu
          </span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  </div>;
};
