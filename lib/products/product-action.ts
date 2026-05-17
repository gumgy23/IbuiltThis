"use server";

import { auth, currentUser } from "@clerk/nextjs/server"
import { productSchema } from "./product-validations";
import { db } from "@/db";
import { products } from "@/db/schema";
import z from "zod";

type FormState = {
    success: boolean;
    errors?: Record<string, string[] | undefined>;
    message: string;
}

export const addProductAction = async (prevState: FormState,
    formData: FormData): Promise<FormState> => {
    console.log(formData)

    try{

        const { userId } = await auth();

        if (!userId) {
            return {
                success: false,
                message: "You must be signed in to submit a product"
            };
        }


        //data
        const user = await currentUser();
        const userEmail = user?.emailAddresses[0]?.emailAddress || "anonymous";

        const rawFormData = Object.fromEntries(formData.entries());

        const validateData = productSchema.safeParse(rawFormData)

        if (!validateData.success) {
            return {
                success: false,
                errors: validateData.error.flatten().fieldErrors,
                message: "Invalid data"
            };
        }

        const { name, slug, tagline, description, 
            websiteUrl, tags } = validateData.data;
        
        const tagsArray = tags ? tags.filter((tag) => 
            typeof tag === "string") : [];

        //transfer the data
        await db.insert(products)
                .values( { 
                    name, 
                    slug, 
                    tagline, 
                    description, 
                    websiteUrl,
                    tags: tagsArray, 
                    status: "pending", 
                    submittedBy: userEmail,
                    userId } );

        return { success: true, message: "Product submitted successfully! it will be reviewed shortly" };

    } catch (err) {
        console.error(err);
        
        if (err instanceof z.ZodError){
            return {
                success: false,
                errors: err.flatten().fieldErrors,
                message: "Validation failed. please check the form"
            };
        }
        
        return {
            success: false,
            message: "Failed to submit product"
        };
    }
}

