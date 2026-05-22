import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";

export type FormState = {
    success: boolean;
    errors?: Record<string, string[] | undefined>;
    message: string;
}


export type ProductType = InferSelectModel<typeof products>;