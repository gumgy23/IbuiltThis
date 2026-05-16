import HeroSection from "@/components/landing-page/hero-section";
import FeatureProducts from "@/components/landing-page/featureproducts";
import RecentlyLaunchedProducts from "@/components/landing-page/recentlylaunchedproducts";


export default function Home() {
  return (
   <div>
      <HeroSection />
      <FeatureProducts />
      <RecentlyLaunchedProducts />
   </div>
  );
}
