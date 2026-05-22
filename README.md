# IBuiltThis

> A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.

---

## About

**IBuiltThis** is a product discovery and launch platform built for indie makers and developers. Creators can share what they've built, and visitors can discover new products, vote on their favorites, and follow the latest launches from the community.

Whether you shipped an AI tool, a SaaS product, a course, or a side project — IBuiltThis is the place to put it in front of real people.

---

## Features

- **Hero Section** — Bold landing page with platform stats (projects shared, active creators, monthly visitors)
- **Featured Products** — Curated top picks from the community, complete with descriptions, tags, and vote counts
- **Recently Launched** — The latest products submitted to the platform
- **Voting System** — Upvote and downvote products to surface the best work
- **Product Tags** — Categorize products (SaaS, AI, Course, Pricing, etc.)
- **Product Detail Pages** — Individual pages for each product at `/products/[slug]`
- **Submit a Product** — Authenticated form for creators to submit their work at `/submit`
- **Responsive Design** — Works across all screen sizes

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | React framework (App Router) |
| [React](https://react.dev) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [Shadcn/ui](https://ui.shadcn.com) | latest | Pre-built UI components |
| [Radix UI](https://www.radix-ui.com) | latest | Headless UI primitives |
| [Lucide React](https://lucide.dev) | latest | Icons |
| [Clerk](https://clerk.com) | 7 | Authentication & user management |
| [Drizzle ORM](https://orm.drizzle.team) | latest | Type-safe database ORM |
| [Neon](https://neon.tech) | latest | Serverless PostgreSQL database |
| [Zod](https://zod.dev) | 4 | Schema validation |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v20 or higher (required by Clerk)
- npm (comes with Node.js)
- A [Clerk](https://clerk.com) account for authentication
- A [Neon](https://neon.tech) account for the PostgreSQL database

### Environment Variables

Create a `.env.local` file in the root of the project and add your Clerk and database keys:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://...
```

- **Clerk keys** — found in your [Clerk Dashboard](https://dashboard.clerk.com) under **API Keys**
- **DATABASE_URL** — found in your [Neon Console](https://console.neon.tech) under **Connection Details**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/gumgy23/IbuiltThis.git
cd IbuiltThis

# 2. Install dependencies
npm install

# 3. Add your environment variables (see above)

# 4. Push the database schema
npx drizzle-kit push

# 5. (Optional) Seed the database with sample data
npx tsx db/seed.ts

# 6. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Project Structure

```
ibuilthis-app/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home / landing page
│   ├── layout.tsx              # Root layout (ClerkProvider, fonts, metadata)
│   ├── globals.css             # Global styles
│   ├── products/
│   │   ├── page.tsx            # Products listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Individual product detail page (SSG with slug-based routing)
│   └── submit/
│       └── page.tsx            # Submit a product page
├── components/
│   ├── common/                 # Shared UI components (Header, Footer, SectionHeader)
│   ├── forms/                  # Reusable form components (FormField)
│   ├── landing-page/           # Landing page sections (Hero, Featured, Recent)
│   ├── products/               # Product components (ProductCards, VotingButton, ProductSkeleton, ProductSubmitForm)
│   └── ui/                     # Base UI primitives (Button, Badge, Card, Input, Skeleton, etc.)
├── db/
│   ├── schema.ts               # Drizzle database schema (products table)
│   ├── index.ts                # Database connection (Neon + Drizzle)
│   ├── data.ts                 # Static seed data
│   └── seed.ts                 # Database seeding script
├── drizzle/                    # Drizzle migration files
├── drizzle.config.ts           # Drizzle ORM configuration
├── lib/
│   ├── utils.ts                # Utility functions
│   └── products/
│       ├── product-select.ts   # Database query helpers (getAllProducts, getFeaturedProducts, getProductbySlug, etc.)
│       ├── product-validations.ts  # Zod validation schemas
│       └── product-action.ts   # Server actions (submit product)
├── types/                      # TypeScript type definitions
├── proxy.ts                    # Clerk authentication middleware
├── .env.local                  # Environment variables (not committed)
└── public/                     # Static assets
```

---

## Available Scripts

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm start           # Start production server
npm run lint        # Run ESLint

npx drizzle-kit push        # Push schema changes to the database
npx drizzle-kit studio      # Open Drizzle Studio (visual DB browser)
npx tsx db/seed.ts          # Seed the database with sample data
```

---

## Roadmap

- [x] User authentication (Clerk — Sign In / Sign Up / User Button)
- [x] `/submit` — Submit a new project page with validation and DB persistence
- [x] `/products/[slug]` — Individual product detail page with SSG
- [x] Real product data (Drizzle ORM + Neon PostgreSQL)
- [ ] `/explore` — Browse and filter all products
- [ ] Search and filtering
- [ ] Voting persisted to database

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

MIT — free to use and modify.
