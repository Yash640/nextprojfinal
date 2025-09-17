export type Variant = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Subproduct = {
  slug: string;
  name: string;
  image: string;
  variants: Variant[];
};

export type Category = {
  slug: string;
  name: string;
  image: string;
  subproducts: Subproduct[];
};

const buildVariants = (base: string): Variant[] => {
  return ["A", "B", "C"].map((v) => ({
    slug: v.toLowerCase(),
    name: `${base} ${v}`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci sed dolor rutrum auctor. Cras ultricies mi eu turpis hendrerit fringilla.",
    image: "/placeholder.svg",
  }));
};

const placeholder = "/placeholder.svg";

export const categories: Category[] = [
  {
    slug: "dry-fruits",
    name: "Dry Fruits",
    image: "/Images/categories/dry-fruits.jpg",
    subproducts: [
      { slug: "almonds", name: "Almonds", image: placeholder, variants: buildVariants("Almond") },
      { slug: "cashews", name: "Cashews", image: placeholder, variants: buildVariants("Cashew") },
      { slug: "figs", name: "Figs", image: placeholder, variants: buildVariants("Fig") },
      { slug: "berries", name: "Berries", image: placeholder, variants: buildVariants("Berry") },
    ],
  },
  {
    slug: "millets",
    name: "Millets",
    image: "/Images/categories/millets.jpg",
    subproducts: ["A", "B", "C", "D", "E", "F"].map((n) => ({
      slug: n.toLowerCase(),
      name: `Millet ${n}`,
      image: placeholder,
      variants: buildVariants(`Millet ${n}`),
    })),
  },
  {
    slug: "raw-masale",
    name: "Raw Masale",
    image: "/Images/categories/raw-masale.jpg",
    subproducts: ["A", "B", "C", "D", "E", "F"].map((n) => ({
      slug: n.toLowerCase(),
      name: `Raw Masala ${n}`,
      image: placeholder,
      variants: buildVariants(`Raw Masala ${n}`),
    })),
  },
  {
    slug: "homemade-masale",
    name: "Homemade Masale",
    image: "/Images/categories/homemade-masale.jpg",
    subproducts: ["A", "B", "C", "D", "E", "F"].map((n) => ({
      slug: n.toLowerCase(),
      name: `Homemade Masala ${n}`,
      image: placeholder,
      variants: buildVariants(`Homemade Masala ${n}`),
    })),
  },
  {
    slug: "healthy-snacks",
    name: "Healthy Snacks",
    image: "/Images/categories/healthy-snacks.jpg",
    subproducts: ["A", "B", "C", "D", "E", "F"].map((n) => ({
      slug: n.toLowerCase(),
      name: `Snack ${n}`,
      image: placeholder,
      variants: buildVariants(`Snack ${n}`),
    })),
  },
  {
    slug: "pickles",
    name: "Pickles",
    image: "/Images/categories/pickles.jpg",
    subproducts: ["A", "B", "C", "D", "E", "F"].map((n) => ({
      slug: n.toLowerCase(),
      name: `Pickle ${n}`,
      image: placeholder,
      variants: buildVariants(`Pickle ${n}`),
    })),
  },
];

export const getCategory = (slug: string): Category | undefined =>
  categories.find((c) => c.slug === slug);

export const getSubproduct = (
  category: string,
  subproduct: string
): { category: Category; subproduct: Subproduct } | undefined => {
  const cat = getCategory(category);
  if (!cat) return undefined;
  const sub = cat.subproducts.find((s) => s.slug === subproduct);
  if (!sub) return undefined;
  return { category: cat, subproduct: sub };
};

export const getVariant = (
  category: string,
  subproduct: string,
  variant: string
): { category: Category; subproduct: Subproduct; variant: Variant } | undefined => {
  const sub = getSubproduct(category, subproduct);
  if (!sub) return undefined;
  const found = sub.subproduct.variants.find((v) => v.slug === variant);
  if (!found) return undefined;
  return { category: sub.category, subproduct: sub.subproduct, variant: found };
};


