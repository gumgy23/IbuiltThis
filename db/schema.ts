import {
    pgTable,
    serial,
    text,
    varchar,
    integer,
    timestamp,
    json,
    uniqueIndex,
    index
} from "drizzle-orm/pg-core";


// ===PRODUCTS===

export const products = pgTable(
    'products', 
    {
    id: serial('id').primaryKey(),

    //core product info
    name: varchar('name', { length: 120 }).notNull(),
    slug: varchar('slug', { length: 140 }).notNull(),
    tagline: varchar('tagline', { length: 200 }).notNull(),
    description: text('description').notNull(),

    //links & media
    websiteUrl: varchar('website_url'),
    tags: json('tags').$type<string[]>(),

    //voting 
    voteCount: integer('vote_count').default(0).notNull(),

    //metadata  
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    approveAt: timestamp('approve_at', { withTimezone: true }),
    status: varchar('status', { length: 50 }).default('pending'), // pending, approved, rejected
    submittedBy: varchar('submitted_by', { length: 120 }).default('anonymous'),
    userId: varchar('user_id', { length: 255 }), // clerk user id of the submitter

    //organization info (optional)
    organizationId: varchar('organization_id', { length: 255 }), // clerk organization id if submitted on behalf of an organization

    },
    (table) => ({
        slugIdx: uniqueIndex('product_slug_idx').on(table.slug),
        statusIdx: index('product_status_idx').on(table.status),
        organization: index('product_organization_idx').on(table.organizationId),
    })
);