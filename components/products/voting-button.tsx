"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDownIcon, ChevronUpIcon, Loader2Icon } from "lucide-react";
import { downvoteProductAction, upvoteProductAction } from "@/lib/products/product-action";
import { useOptimistic, useTransition } from "react";

export default function VotingButton({
    hasVoted, 
    voteCount: initialVoteCount,
    productId 
}: { 
    hasVoted?: boolean;
    voteCount?: number;
    productId: number;
}) {

    // Optimistic UI state for vote count to provide immediate feedback to the user
    const [optimisticVoteCount, setOptimisticVoteCount] = useOptimistic(
        initialVoteCount,
        (currentCount = 0, change: number) => Math.max(0,
            currentCount + change)
    );

    // Transition state to handle pending UI updates make sure us it if using optimistic UI updates to prevent multiple rapid votes
    const [isPending, startTransition] = useTransition();

    const handleUpvote = async () => {
        startTransition(async () => {
            setOptimisticVoteCount(1);
            await upvoteProductAction(productId);
        });
    }

    const handleDownvote = async () => {
        startTransition(async () => {
            setOptimisticVoteCount(-1);
            await downvoteProductAction(productId);
        });
    }
    
  return (
    <div className="flex flex-col items-center 
    gap-1 shrink-0" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
    }}>
        <Button 
            onClick={handleUpvote}
            variant="ghost" 
            disabled={isPending}
            size="icon-sm" 
            className={cn(
                        "h-8 w-8 text-primary",
                        hasVoted 
                        ? "bg-primary/10 text-primary hover:bg-primary/20" :
                        "hover:bg-primary/10 text-primary hover:text-primary")}
        >
            <ChevronUpIcon className="size-4" />
        </Button>
        <span className="text-sm font-semibold transition-colors text-foreground">
            {isPending ? (
                <Loader2Icon className="size-4 animate-spin" />
            ) : (
                optimisticVoteCount
            )}
            
        </span>
            <Button 
                onClick={handleDownvote}
                variant="ghost" 
                size="icon-sm" 
                disabled={isPending}
                className={cn(
                "h-8 w-8 text-primary",
                hasVoted 
                ? "hover:bg-primary/20" :
                "opacity-50 cursor-not-allowed")}
            >
                <ChevronDownIcon className="size-4" />
        </Button>
    </div>
    
  )
}