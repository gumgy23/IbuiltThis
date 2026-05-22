"use client";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import { FormField } from "../forms/form-field";
import { Button } from "../ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { useActionState } from "react";
import { FormState } from "@/types";
import { cn } from "@/lib/utils";


const InitialState: FormState = {
  success: false,
  errors: {},
  message: ""
}

export default function ProductSubmissionForm() {
  const [state, formAction, isPending] = 
  useActionState(
    addProductAction,
    InitialState
  )

  const { errors, message, success } = state;
  const hasSubmitted = !!message;

  return (
    <form className="space-y-6" action={formAction}>
      {message && (
        <div className={cn(
          "p-4 rounded-lg border",
          success
          ? "bg-primary/10 border-primary text-primary"
          : "bg-destructive/10 border-desctructive text-destructive"
        )}
        role="alert"
        aria-live="polite"
        >
          {message}
        </div>
      )}
      <FormField 
        label = "Product Name"
        name = "name"
        id= "name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error={errors?.name ?? []}
      />
      <FormField 
        label = "Slug"
        name = "slug"
        id= "slug"
        placeholder="My-Awesome-Product"
        required
        onChange={() => {}}
        error={errors?.slug ?? []}
        helperText="Text slug is the URL-friendly version of the product name"
      />
      <FormField
        label = "Tagline"
        name = "tagline"
        id= "tagline"
        placeholder="A short, catchy tagline for your product"
        required
        onChange={() => {}}
        error={errors?.tagline ?? []}
      />
      <FormField
        label = "Description"
        name = "description"
        id= "description"
        placeholder="Tell us more about your product .."
        required
        onChange={() => {}}
        error={errors?.description ?? []}
        textarea
      />
      <FormField
        label = "Website URL"
        name = "websiteUrl"
        id= "websiteUrl"
        placeholder="https://www.yourproduct.com"
        required
        onChange={() => {}}
        error={errors?.websiteUrl ?? []}
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label = "Tags"
        name = "tags"
        id= "tags"
        placeholder="AI, SaaS, Productivity"
        required
        onChange={() => {}}
        error={errors?.tags ?? []}
        helperText="Comma-separated tags (e.g., AI, Saas, Productivity"
      />
      <Button type="submit" size="lg"
        className="w-full">
          {isPending ? (
            <Loader2Icon className="size-4 animate-spin" />
          ) : (
            <>
              <SparkleIcon className="size-4" />
              Submit Product
            </>
          )}
      </Button>
    </form>
  );
}