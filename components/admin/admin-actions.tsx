
"use client";

import { Button } from "../ui/button";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { approveProductAction, rejectProductAction } from "../../lib/admin/admin-action";
import { ProductType } from "@/types";

export default function AdminActions({ 
    status,
    productId
}: { 
    status: string
    productId: ProductType["id"]
}) {
    const handleApprove = async () => {
        // Implement approve logic here
       
        await approveProductAction(productId);
       
    }
    const handleReject = async () => {
        // Implement reject logic here
        await rejectProductAction(productId);
        
    }
    

    return (
       <div className="space-y-2">
            {status === "pending" && (
            <div className="flex gap-2">
                <Button variant="default" 
                className="hover:cursor-pointer" onClick={handleApprove}>
                    <CheckCircleIcon className="size-4" />
                    Approve
                </Button>
                <Button variant="destructive" 
                className="hover:cursor-pointer" onClick={handleReject}>
                    <XCircleIcon className="size-4" />
                    Reject
                </Button>
            </div>
            )}
       </div>
    );
}