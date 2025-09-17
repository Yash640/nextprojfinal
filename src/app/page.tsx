"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/catalog";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-white grid place-items-center font-bold text-lg shadow-lg">
              O
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              ORIGINIK
            </span>
          </div>
          <Badge variant="secondary">Since 2025</Badge>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Wholesome foods crafted by Originik</h1>
          <p className="text-muted-foreground mt-2">Explore categories from dry fruits to homemade masale. Click to view subproducts.</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/${cat.slug}`}>
              <Card className="group overflow-hidden transition-all duration-300 border border-transparent hover:border-orange-500/40 hover:shadow-[0_0_0_4px_rgba(234,88,12,0.15)]">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">View products →</p>
                </div>
              </Card>
            </Link>
          ))}
        </section>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Originik</span>
          <span>Made with Next.js</span>
        </div>
      </footer>
    </div>
  );
}
