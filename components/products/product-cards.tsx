import Link from "next/link";
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter

 } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronUpIcon, ChevronDownIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";


type Product = InferSelectModel<typeof products>;

export default function ProductCards({ product }: { 
    product: Product }) {
        const hasVoted = false; // Replace with actual voting logic
    return (
       <Link href={`/products/${product.id}`}>
            <Card className="group card-hover hover:bg-primary/10 border-solid border-gray-500 min-h-[180px]">
                <CardHeader className="flex-1">
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {product.name}
                                </CardTitle>
                                {product.voteCount > 250 && (
                                    <Badge className="gap-1
                                    bg-primary text-primary-foreground">
                                        <StarIcon className="size-3" />
                                        Featured
                                    </Badge>
                                )}
                            </div>
                        <CardDescription>{product.description}</CardDescription>
                    </div>  
                    {/* Vooting buttons */}
                    <div className="flex flex-col items-center gap-1 shrink-0">
                        <Button 
                            variant="ghost" 
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
                            {product.voteCount}
                        </span>
                        <Button 
                            variant="ghost" 
                            size="icon-sm" 
                            className={cn(
                                "h-8 w-8 text-primary",
                                hasVoted 
                                ? "hover:bg-primary/20" :
                                "opacity-50 cursor-not-allowed")}
                        >
                            <ChevronDownIcon className="size-4" />
                        </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardFooter className="flex items-center gap-2">
                    {product.tags?.map((tag) => (
                        <Badge variant="secondary" key={tag}>
                            {tag}
                        </Badge>
                    ))}
                </CardFooter>
                

            </Card>
        </Link>
        
    );
}