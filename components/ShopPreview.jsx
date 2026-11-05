"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

const products = [
  {
    id: "lick-print",
    name: "Lick Flavor Study",
    type: "Art print concept",
    collection: "Prints",
    price: "$24",
    image: "/assets/work/design-image-2.jpg",
    imageAlt: "Lick ice cream brand artwork",
    color: "bg-[#f5b2c4]",
  },
  {
    id: "dicey-dice-download",
    name: "Dicey Dice Artwork",
    type: "Digital download concept",
    collection: "Digital",
    price: "$12",
    image: "/assets/work/design-image-3.jpg",
    imageAlt: "Dicey Dice apparel brand artwork",
    color: "bg-[#8c88bc]",
  },
  {
    id: "duncanville-print",
    name: "Duncanville Bookstore",
    type: "Art print concept",
    collection: "Prints",
    price: "$28",
    image: "/assets/work/design-image-1.jpg",
    imageAlt: "Duncanville Bookstore identity artwork",
    color: "bg-[#f3d16a]",
  },
];

const collections = ["All designs", "Prints", "Digital"];

export default function ShopPreview() {
  const [collection, setCollection] = useState("All designs");
  const [bagCount, setBagCount] = useState(0);
  const [announcement, setAnnouncement] = useState("");

  const visibleProducts = useMemo(
    () =>
      collection === "All designs"
        ? products
        : products.filter((product) => product.collection === collection),
    [collection],
  );

  const addToDemoBag = (product) => {
    setBagCount((count) => count + 1);
    setAnnouncement(`${product.name} added to the demo bag.`);
  };

  return (
    <div className="page-shell py-8 md:py-12">
      <div className="section-wrap max-w-7xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--accent)]/25 bg-[var(--accent-soft)] px-4 py-3 text-sm">
          <p className="font-semibold text-[var(--text)]">
            Storefront concept <span className="text-[var(--muted-text)]">· Example products and prices · Checkout is not connected</span>
          </p>
          <span className="rounded-full border border-[var(--border-soft)] bg-[var(--panel)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--accent-text)]">
            Shopify study
          </span>
        </div>

        <header className="glass-panel overflow-hidden rounded-[2rem]">
          <div className="grid min-h-[420px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--accent-text)]">
                Dakota King Studio · Design goods
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-5xl">
                Good design belongs out in the world.
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted-text)]">
                A concept storefront for turning original visual ideas into
                prints, digital pieces, and things worth keeping.
              </p>
              <a
                href="#shop-products"
                className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--accent)] px-6 font-bold text-[var(--button-text)] hover:bg-[var(--accent-hover)] hover:text-black"
              >
                Browse the collection <FiArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="relative min-h-[280px] bg-[#f5b2c4] lg:min-h-full">
              <Image
                src="/assets/work/design-image-2.jpg"
                alt="Colorful Lick brand design featured in the shop concept"
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/55 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                Featured design · Lick
              </div>
            </div>
          </div>
        </header>

        <section id="shop-products" className="scroll-mt-8 py-12 md:py-16" aria-labelledby="shop-heading">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent-text)]">
                The collection
              </p>
              <h2 id="shop-heading" className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl">
                Design worth keeping.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter sample products">
              {collections.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setCollection(item)}
                  aria-pressed={collection === item}
                  className={`min-h-10 rounded-full border px-4 text-sm font-bold transition-colors ${
                    collection === item
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--button-text)]"
                      : "border-[var(--border-soft)] bg-[var(--panel)] text-[var(--muted-text)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article key={product.id} className="glass-panel group overflow-hidden rounded-[1.5rem]">
                <div className={`relative aspect-[1.2] overflow-hidden ${product.color}`}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur">
                    Concept
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-text)]">
                    {product.type}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black text-[var(--text)]">{product.name}</h3>
                    <span className="shrink-0 font-bold text-[var(--text)]">{product.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--muted-text)]">
                    Example listing · Price shown for layout only
                  </p>
                  <button
                    type="button"
                    onClick={() => addToDemoBag(product)}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[var(--border-soft)] bg-white/5 px-4 text-sm font-bold text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--button-text)]"
                  >
                    <FiShoppingBag aria-hidden="true" />
                    Add to demo bag
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="glass-panel flex flex-col gap-5 rounded-[1.75rem] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-text)]">
              A concept, not a live shop
            </p>
            <h2 className="mt-2 text-2xl font-black text-[var(--text)]">
              This is where your Shopify storefront could begin.
            </h2>
            <p className="mt-2 max-w-2xl leading-7 text-[var(--muted-text)]">
              The filters and demo bag are interactive, but product details,
              prices, inventory, and checkout are examples only.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-full border border-[var(--border-soft)] bg-[var(--panel)] px-4 py-3 text-sm font-bold text-[var(--text)]">
            <FiShoppingBag className="text-[var(--accent)]" aria-hidden="true" />
            Demo bag <span className="text-[var(--accent-text)]">{bagCount}</span>
          </div>
        </footer>
        <p className="sr-only" aria-live="polite">{announcement}</p>
      </div>
    </div>
  );
}
