CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(120) NOT NULL,
	"slug" varchar(140) NOT NULL,
	"tagline" varchar(200) NOT NULL,
	"description" text NOT NULL,
	"website_url" varchar,
	"tags" json,
	"vote_count" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approve_at" timestamp with time zone,
	"status" varchar(50) DEFAULT 'pending',
	"submitted_by" varchar(120) DEFAULT 'anonymous',
	"user_id" varchar(255),
	"organization_id" varchar(255)
);
--> statement-breakpoint
CREATE UNIQUE INDEX "product_slug_idx" ON "products" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "product_status_idx" ON "products" USING btree ("status");--> statement-breakpoint
CREATE INDEX "product_organization_idx" ON "products" USING btree ("organization_id");