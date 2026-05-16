import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { products } from "./schema";
import { allProducts } from "./data";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    console.log("🌱 Seeding database...");

    // clear existing data
    await db.delete(products);
    console.log("✅ Cleared existing products!");

    // insert new data
    for (const product of allProducts) { 
        await db.insert(products).values({
            name: product.name,
            slug: product.slug,
            tagline: product.tagline,
            description: product.description,
            websiteurl: product.websiteUrl,
            tags: product.tags,
            voteCount: product.voteCount || 0,
            createdAt: product.createdAt,
            approveAt: product.approvedAt,
            status: product.status,
            submittedBy: product.submittedBy,
        });

        console.log(`✅ Added products: ${product.name} (${product.voteCount || 0} votes)`);
    }
   
    //verify inserted products
    const insertedProducts = await db.select().from(products);
    console.log(`🌟 Successfully inserted ${insertedProducts.length} products!`);

    console.log("🎉 Product in database:");
    insertedProducts.forEach((product) => {
        console.log(
            `- ${product.name} (${product.slug}) - ${product.voteCount} votes`
        );
    });
}

main()
    .catch((error) => {
        console.error("❌ Error seeding database:", error);
        process.exit(1);
    })
    .finally(() => {
        console.log("🔌 Closing database connection.");
        process.exit(0);
    });