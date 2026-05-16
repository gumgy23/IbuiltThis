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
- **Submit Project CTA** — Clear call-to-action for creators to share their own work
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

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/gumgy23/IbuiltThis.git
cd IbuiltThis

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## Project Structure

```
ibuilthis-app/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home / landing page
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── globals.css         # Global styles
│   └── products/
│       └── page.tsx        # Products listing page
├── components/
│   ├── common/             # Shared UI components (Header, Footer, etc.)
│   ├── landing-page/       # Landing page sections (Hero, Featured, Recent)
│   ├── products/           # Product card components
│   └── ui/                 # Base UI primitives (Button, Badge, Card)
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

---

## Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## Roadmap

These features are planned and in progress:

- [ ] `/submit` — Submit a new project page
- [ ] `/explore` — Browse and filter all products
- [ ] `/products/[id]` — Individual product detail page
- [ ] User authentication (Sign In / Sign Up)
- [ ] Real product data (database integration)
- [ ] Search and filtering

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
