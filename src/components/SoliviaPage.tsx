import { useEffect, useMemo, useRef } from "react";
import { buildPage } from "@/content/solivia.parts";

export function SoliviaPage({ html, title }: { html: string; title: string }) {
  const pageHTML = useMemo(() => buildPage(html), [html]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".hero-stat-val");
    if (!els.length) return;

    type Target = {
      el: HTMLElement;
      prefix: string;
      suffix: string;
      value: number;
      decimals: number;
    };
    const targets: Target[] = [];
    els.forEach((el) => {
      const text = (el.textContent ?? "").trim();
      const m = text.match(/^([^\d.-]*)([\d,.]+)(.*)$/);
      if (!m) return;
      const numStr = m[2].replace(/,/g, "");
      const value = parseFloat(numStr);
      if (!isFinite(value)) return;
      const decimals = numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0;
      targets.push({ el, prefix: m[1], suffix: m[3], value, decimals });
      el.textContent = m[1] + (0).toFixed(decimals) + m[3];
    });
    if (!targets.length) return;

    const duration = 1800;
    let start: number | null = null;
    let raf = 0;

    const format = (v: number, decimals: number) => {
      const fixed = v.toFixed(decimals);
      if (decimals > 0) return fixed;
      return Math.round(v).toLocaleString("en-US");
    };

    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min(1, (t - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      for (const tg of targets) {
        const current = tg.value * eased;
        tg.el.textContent = tg.prefix + format(current, tg.decimals) + tg.suffix;
      }
      if (p < 1) raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries.some((e) => e.isIntersecting)) {
          raf = requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(targets[0].el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [pageHTML]);

  return (
    <div
      ref={containerRef}
      aria-label={title}
      style={{
        margin: 0,
        padding: 0,
      }}
      dangerouslySetInnerHTML={{ __html: pageHTML }}
    />
  );
}