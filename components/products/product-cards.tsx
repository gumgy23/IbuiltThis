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
import VotingButton from "./voting-button";


type Product = InferSelectModel<typeof products>;

export default function ProductCards({ product }: { 
    product: Product }) {
        const hasVoted = false; // Replace with actual voting logic
    return (
       <Link href={`/products/${product.slug}`}>
            <Card className="group card-hover hover:bg-primary/10 border-solid border-gray-500 min-h-[200px]">
                <CardHeader className="flex-1">
                    <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                {product.name}
                                </CardTitle>
                                {product.voteCount > 250 && (
                                    <Badge className="gap-1 bg-primary text-primary-foreground">
                                        <StarIcon className="size-3" />
                                        Featured
                                    </Badge>
                                )}
                            </div>
                            <CardDescription>{product.description}</CardDescription>
                        </div>  
                        {/* Voting buttons */}
                        <VotingButton 
                            hasVoted={hasVoted} 
                            voteCount={product.voteCount} 
                            productId={product.id} />
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