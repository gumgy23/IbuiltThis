"use client";

import { deleteProductAction } from "@/lib/admin/admin-action";
import { ProductType } from "@/types";
import { TrashIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function AdminDelete({ 
    productId 
}: { 
    productId: ProductType["id"] 
}) {
    const handleDelete = async () => {
            // Implement delete logic here
           
            await deleteProductAction(productId);
           
        }
    return (
        <div>
            <Button variant="outline" onClick={handleDelete}>
                <TrashIcon className="size-4" />
                Delete
            </Button>
        </div>
    );
}