import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const outfit = Outfit({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "IBuilthis - Share Your Creations, Discover New Launches",
  description: "A community plaftorm for creators to showcase their apps, AI tools, SAAS Product and creative project. Authentic launches, real builders, genuine feedback. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", outfit.className)}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
