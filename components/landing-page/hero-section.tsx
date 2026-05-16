import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, EyeIcon, RocketIcon, SparkleIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

const LiveBadge = () => {
    return (
        <Badge 
            variant="outline" 
            className="px-4 py-2 mb-2 text-sm rounded-full mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-muted-foreground">
                Join thousands of creators sharing their work
            </span>
            
        </Badge>
    );
};

const statData = [
    {
        icon: RocketIcon,
        value: "2.5K+", 
        label: "Projects Shared"
    },
    {
        icon: UserIcon,
        value: "10K+",
        label: "Active Creators",
        hasborder: true
    },
    {
        icon: EyeIcon,
        value: "50K+", 
        label: "Monthly Visitors"
    }
];


export default function HeroSection() {
  return (
     <section className="relative overflow-hidden bg-linear-to-b from-background via background to-muted/20">
        <div className="wrapper">
            <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
                <LiveBadge />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
                    Share what You&apos;ve Build, Discover What&apos;s Launching
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                    A community plaftorm for creators to showcase their apps, AI tools, SAAS Product and creative project.
                    Authentic launches, real builders, genuine feedback.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-16">
                    <Button asChild size="lg" className="text-base px-8 shadow-lg">
                        <Link href="/submit">
                            <SparkleIcon className="mr-2 h-4 w-4" />
                            Share Your Project
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="text-base px-8 shadow-lg" variant="secondary">
                        <Link href="/submit">
                            Explore Project
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
                    {statData.map((stat) => (
                        <StatsCard key={stat.label} {...stat} />
                    ))}
                </div>
                
            </div>
        </div>  
    </section>
  );
}
