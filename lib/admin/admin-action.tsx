"use server";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { products } from "@/db/schema";
import { ProductType } from "@/types"
import { revalidatePath } from "next/cache";

export const approveProductAction = async (productId: ProductType["id"]) => {
   
    try {
        await db.update(products)
        .set({ status: "approved", approveAt: new Date() })
        .where(eq(products.id, productId)); 

        revalidatePath("/admin"); // Revalidate the admin page to reflect changes

        return { 
            success: true, 
            message: "Product approved successfully" 
        };
    }
    catch (error) {
        console.error("Error approving product:", error);
        return { 
            success: false, 
            message: "Failed to approve product" 
        };
    }
    
}

export const rejectProductAction = async (productId: ProductType["id"]) => {
   
    try {
        await db.update(products)
        .set({ status: "rejected" })
        .where(eq(products.id, productId));

        revalidatePath("/admin"); // Revalidate the admin page to reflect changes

        return { 
            success: true, 
            message: "Product rejected successfully" 
        };
    }
    catch (error) {
        console.error("Error rejecting product:", error);
        return { 
            success: false, 
            message: "Failed to reject product" 
        };
    }
}
