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

export async function getAllProducts() {
    
    const productsData = await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount));

    return productsData; 
}

export async function getRecentProducts() {
  await connection();
  const productsData = await getAllProducts();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  return productsData.filter(
    (product) =>
      product.createdAt &&
      new Date(product.createdAt.toISOString()) >= oneWeekAgo
  );
}

export async function getProductbySlug(slug: string) {
    const productData = await db
        .select()
        .from(products)
        .where(eq(products.slug, slug))
        .limit(1);  
        
    return productData?.[0] ?? null; // Return the first (and only) product found
}