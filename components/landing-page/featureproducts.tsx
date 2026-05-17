"use cache";

import { ArrowRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import { Button } from  "../ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-cards";
import { getFeaturedProducts } from "@/lib/products/product-select";

// const featuredProducts = [
//     {
//         id: 1,  
//         name: "ParityKit",
//         description: "Price parity for global Saas Product", 
//         tags:["Saas", "Pricing", "Global"],
//         votes: 612,
//         isFeatured: true
//     },
//     {
//         id: 2,  
//         name: "Developer to Leader",
//         description: "A Course on Engineering Leadership", 
//         tags:["Course","Leadership"],
//         votes: 503,
//         isFeatured: true
//     },
//     {
//         id: 3,  
//         name: "ProofyBuble",
//         description: "Social proof Notification that convert visitors into customers", 
//         tags:["Marketing", "SaaS", "Conversion"],
//         votes: 531,
//         isFeatured: true
//     },
//     {
//         id: 4,  
//         name: "Modern Full Stack Next,js Course",
//         description: "Learn to build and deploy full stack application using Next.js 13, Tailwind CSS, Prisma and more", 
//         tags:["NextJs", "Course", "FullStack"],
//         votes: 124,
//         isFeatured: false
//     }
// ]

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();

    return (
        <section className="py-20 bg-muted/20">
            <div className="wrapper">
                <div className="flex items-center justify-between mb-8">
                    <SectionHeader 
                        title="Feature Products" 
                        icon={StarIcon}
                        description="Top picks from our community this week"
                    />
                    <Button variant="outline" asChild
                        className="hidden sm:flex">
                        <Link href="/explore">
                            View All
                            <ArrowRightIcon className="size-4" />
                        </Link>
                    </Button>
                </div>
                <div className="grid-wrapper">
                    {featuredProducts.map((product) => 
                        <ProductCard key={product.id} product=
                            {product}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}