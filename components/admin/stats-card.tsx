import { cn } from "@/lib/utils";

export default function StatsCard({ 
    approved, 
    pending, 
    rejected, 
    all 
}: { 
    approved: number; 
    pending: number; 
    rejected: number; 
    all: number }) {
    const stats = [
        { 
            label: "Total Products", 
            count: all,
            color: "bg-primary/10"
        },
        { 
            label: "Pending", 
            count: pending,
            color: "bg-yellow-500/10"
        },
        { 
            label: "Approved", 
            count: approved,
            color: "bg-green-500/10"
        },
        { 
            label: "Rejected", 
            count: rejected,
            color: "bg-red-500/10"
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div
                key={stat.label}
                className={cn(`status-badge-card ${stat.color}`)}>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl font-bold">{stat.count}</p>
                </div>
            ))}
                    
        </div>
    );
}