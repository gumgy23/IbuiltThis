import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "@/components/products/product-cards";
import EmptyState from "../common/empty-state";
import { getRecentProducts } from "@/lib/products/product-select";



export default async function RecentlyLaunchedProducts() {
    
const recentlylauchedproducts = await getRecentProducts();

    return (
        <section className="py-20">
            <div className="wrapper space-y-12">
                <SectionHeader
                    title="Recently Launched Products"
                    icon={RocketIcon}
                    description="The most recently launched product on the platform."
                />
                 
                    {recentlylauchedproducts.length > 0 ? (
                        <div className="grid-wrapper">
                            {recentlylauchedproducts.map((product) => 
                                <ProductCard key={product.id} product=
                                {product}
                                />  
                            )}
                        </div>
                        ) : (
                            <EmptyState message="No recently launched products available. check back soon!" icon={CalendarIcon} />
                    )}
            </div>
        </section>
    );
}
