"use client";

import { BillboardColumn } from "./columns";

interface CellAction {
    data: BillboardColumn
}

export const CellAction:React.FC<CellAction> = () => {
  return <div>CellAction</div>;
};
