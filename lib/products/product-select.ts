import { db } from '@/db';
import { products } from '@/db/schema';
import { and, desc, eq, gt, gte } from 'drizzle-orm';
import { connection } from "next/server";

export async function getFeaturedProducts() {
    "use cache";
    const productsData = await db
        .select()
        .from(products)
        .where(and(eq(products.status, "approved"), gt(products.voteCount, 250)))
        .orderBy(desc(products.voteCount));

    return productsData; 
}

export async function getAllApprovedProducts() {

    const productsData = await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount));

    return productsData; 
}

export async function getAllProducts() {
    "use cache";
    const productsData = await db
        .select()
        .from(products)
        .orderBy(desc(products.voteCount));

    return productsData; 
}

export async function getRecentProducts() {
  await connection();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return db
    .select()
    .from(products)
    .where(and(eq(products.status, "approved"), gte(products.createdAt, oneWeekAgo)))
    .orderBy(desc(products.voteCount));
}

export async function getProductbySlug(slug: string) {
    "use cache";
    const productData = await db
        .select()
        .from(products)
        .where(eq(products.slug, slug))
        .limit(1);  
        
    return productData?.[0] ?? null; // Return the first (and only) product found
}