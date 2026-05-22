import HeroSection from "@/components/landing-page/hero-section";
import FeatureProducts from "@/components/landing-page/featureproducts";
import RecentlyLaunchedProducts from "@/components/landing-page/recentlylaunchedproducts";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";
import Product from "./products/[slug]/page";
import ProductSkeleton from "@/components/products/product-skeleton";


export default function Home() {
  return (
   <div>
      <HeroSection />
      <FeatureProducts />
      <Suspense fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProducts />
      </Suspense>
   </div>
  );
}
