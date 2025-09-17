import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVariant } from "@/lib/catalog";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbLink } from "@/components/ui/breadcrumb";

type Props = {
  params: Promise<{ category: string; subproduct: string; variant: string }>;
};

export default async function VariantPage({ params }: Props) {
  const { category, subproduct, variant } = await params;
  const res = getVariant(category, subproduct, variant);
  if (!res) return notFound();
  const { category: cat, subproduct: sp, variant: v } = res;
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
            <BreadcrumbLink asChild>
              <Link href={`/${cat.slug}/${sp.slug}`}>{sp.name}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{v.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-muted">
          <Image
            src={v.image}
            alt={v.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{v.name}</h1>
          <p className="text-muted-foreground mt-3 leading-7">{v.description}</p>
          <div className="mt-6 flex gap-3">
            <Link href={`/${cat.slug}/${sp.slug}`} className="underline">Back to {sp.name}</Link>
            <span className="text-muted-foreground">/</span>
            <Link href={`/${cat.slug}`} className="underline">{cat.name}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


