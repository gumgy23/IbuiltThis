import SectionHeader from "@/components/common/section-header";
import { SparkleIcon } from "lucide-react";
import ProductSubmissionForm from "@/components/products/product-submit-form";

export default function SubmitPage() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Submit Your Product"
            icon={SparkleIcon}
            description="Share your creation with the community. Your submission will be reviewed before it goes live on the platform."
        />
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <ProductSubmissionForm />
      </div>
    </section>
  );
}