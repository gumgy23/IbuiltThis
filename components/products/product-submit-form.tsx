"use client";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import { FormField } from "../forms/form-field";
import { Button } from "../ui/button";
import { addProductAction } from "@/lib/products/product-action";
import { useActionState } from "react";


const InitialState = {
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
      <FormField 
        label = "Product Name"
        name = "name"
        id= "name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error={hasSubmitted ? errors?.name : undefined}
      />
      <FormField 
        label = "Slug"
        name = "slug"
        id= "slug"
        placeholder="My-Awesome-Product"
        required
        onChange={() => {}}
        error={hasSubmitted ? errors?.slug : undefined}
        helperText="Text slug is the URL-friendly version of the product name"
      />
      <FormField
        label = "Tagline"
        name = "tagline"
        id= "tagline"
        placeholder="A short, catchy tagline for your product"
        required
        onChange={() => {}}
        error={hasSubmitted ? errors?.tagline : undefined}
      />
      <FormField
        label = "Description"
        name = "description"
        id= "description"
        placeholder="Tell us more about your product .."
        required
        onChange={() => {}}
        error={hasSubmitted ? errors?.description : undefined}
        textarea
      />
      <FormField
        label = "Website URL"
        name = "websiteUrl"
        id= "websiteUrl"
        placeholder="https://www.yourproduct.com"
        required
        onChange={() => {}}
        error={hasSubmitted ? errors?.websiteUrl : undefined}
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label = "Tags"
        name = "tags"
        id= "tags"
        placeholder="AI, SaaS, Productivity"
        required
        onChange={() => {}}
        error={hasSubmitted ? errors?.tags : undefined}
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