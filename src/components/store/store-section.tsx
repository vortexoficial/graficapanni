"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, BadgeCheck, ShoppingBag, Sparkles } from "lucide-react";
import { useRef } from "react";
import { ProductCard } from "@/components/store/product-card";
import { getFeaturedProducts } from "@/lib/store-products";

const featuredProducts = getFeaturedProducts();

export function StoreSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="loja"
      className="site-section relative overflow-hidden px-4 py-20 md:py-24"
      style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border-soft)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-72 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgba(255,210,31,0.14), transparent 34%), radial-gradient(circle at 82% 18%, rgba(255,0,127,0.12), transparent 32%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="site-section-header mb-10 grid gap-6 md:mb-12 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
              style={{
                background: "rgba(255,210,31,0.1)",
                border: "1px solid rgba(255,210,31,0.28)",
                color: "var(--yellow)",
              }}
            >
              <BadgeCheck size={14} />
              Pronta entrega
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="site-heading mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Loja da Panni
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="site-copy mt-4 max-w-2xl text-sm leading-relaxed md:text-base"
              style={{ color: "var(--text-muted)" }}
            >
              Confira produtos criativos à pronta entrega, personalizados com qualidade,
              agilidade e o toque visual da Panni.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            <Link
              href="/loja"
              className="btn-gradient inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-bold"
            >
              <ShoppingBag size={17} />
              Ver todos os produtos
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * index }}
            >
              <ProductCard product={product} detailLabel="Ver produto" showQuickAction={false} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.36 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          <Sparkles size={16} style={{ color: "var(--cyan)" }} />
          Produtos físicos para presentear, vender, sinalizar e divulgar sua marca.
          <Link
            href="/loja"
            className="inline-flex items-center gap-1 font-bold text-gradient-main"
          >
            Abrir loja
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
