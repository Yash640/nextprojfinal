import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubproduct } from "@/lib/catalog";
import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb";

type Props = {
  params: Promise<{ category: string; subproduct: string }>;
};

export default async function SubproductPage({ params }: Props) {
  const { category, subproduct } = await params;
  const res = getSubproduct(category, subproduct);
  if (!res) return notFound();
  const { category: cat, subproduct: sp } = res;
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/${cat.slug}`}>{cat.name}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{sp.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-2xl font-bold tracking-tight mt-4 mb-6">{sp.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sp.variants.map((v) => (
          <Link key={v.slug} href={`/${cat.slug}/${sp.slug}/${v.slug}`}>
            <Card className="group overflow-hidden transition-all duration-300 border border-transparent hover:border-orange-500/40 hover:shadow-[0_0_0_4px_rgba(234,88,12,0.15)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{v.name}</h3>
                <p className="text-sm text-muted-foreground">View details →</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


