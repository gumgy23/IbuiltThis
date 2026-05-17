import HeroSection from "@/components/landing-page/hero-section";
import FeatureProducts from "@/components/landing-page/featureproducts";
import RecentlyLaunchedProducts from "@/components/landing-page/recentlylaunchedproducts";
import { Suspense } from "react";
import { LoaderIcon } from "lucide-react";


export default function Home() {
  return (
   <div>
      <HeroSection />
      <FeatureProducts />
      <Suspense fallback={
        <div>
          <LoaderIcon className="size-4 animate-spin" />                     
        </div>
      }
      >
      <RecentlyLaunchedProducts />
      </Suspense>
   </div>
  );
}
