"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/catalog";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-emerald-500 text-white grid place-items-center font-bold text-lg shadow-lg">
              O
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-500 via-amber-300 to-emerald-600 bg-clip-text text-transparent">
              ORIGINIK
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <section className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Wholesome foods crafted by Originik</h1>
          <p className="text-muted-foreground mt-2">Explore categories from dry fruits to homemade masale. Click to view subproducts.</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.slug} className="group relative">
              <div className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 bg-gradient-to-r from-emerald-500/40 via-green-500/30 to-teal-500/40"></div>
              <Link href={`/${cat.slug}`} className="relative block">
                <Card className="overflow-hidden transition-all duration-300 border border-transparent hover:border-emerald-500/50 hover:shadow-[0_0_0_6px_rgba(16,185,129,0.25)]">
                  <div className="relative aspect-[4/3] w-[calc(100%-1.5rem)] overflow-hidden rounded-xl border bg-muted m-3">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">View products →</p>
                </div>
                </Card>
              </Link>
            </div>
          ))}
        </section>
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Originik</span>
          <span>Made by Yash Andhale</span>
        </div>
      </footer>
    </div>
  );
}
