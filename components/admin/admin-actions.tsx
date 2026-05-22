import { Button } from "../ui/button";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
export default function AdminActions({ 
    status
}: { 
    status: string
}) {
    return (
       <div className="space-y-2">
            {status === "pending" && (
            <div className="flex gap-2">
                <Button variant="default" 
                className="hover:cursor-pointer">
                    <CheckCircleIcon className="size-4" />
                    Approve
                </Button>
                <Button variant="destructive" 
                className="hover:cursor-pointer">
                    <XCircleIcon className="size-4" />
                    Reject
                </Button>
            </div>
            )}
       </div>
    );
}