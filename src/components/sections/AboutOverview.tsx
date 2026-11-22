'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Download, Github } from 'lucide-react';
import { Locale } from '@/lib/types';
import { TRANSLATIONS } from '@/data/translations';

interface AboutOverviewProps {
  locale: Locale;
}

export default function AboutOverview({ locale }: AboutOverviewProps) {
  const t = TRANSLATIONS[locale];
  const isArabic = locale === 'ar';

  return (
    <section className="py-24 bg-background transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-surface-elevated">
              <Image
                src="/images/ahmed-web.jpg"
                alt="Ahmed — Website Designer & Developer"
                fill
                priority
                unoptimized
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-50" />
            </div>

            {/* Floating verification card */}
            <div className="absolute -bottom-6 right-6 rtl:right-auto rtl:-left-6 bg-surface/90 backdrop-blur-md border border-border p-4 rounded-xl shadow-xl flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Ahmed
                </p>
                <p className="text-[11px] font-mono text-muted">
                  {t.brand.title}
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                06 · {t.about.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-snug">
                {t.about.title}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>

            {/* Quick Metrics */}
            <div className="pt-4 border-t border-border/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg border border-border/50 bg-surface/40 shadow-sm">
                <span className="block text-accent font-bold text-base">26+</span>
                <span className="text-muted">{isArabic ? 'موقعاً مبنياً' : 'Websites Built'}</span>
              </div>
              <div className="p-3 rounded-lg border border-border/50 bg-surface/40 shadow-sm">
                <span className="block text-accent font-bold text-base">2+</span>
                <span className="text-muted">{isArabic ? 'سنوات خبرة' : 'Years Experience'}</span>
              </div>
              <div className="p-3 rounded-lg border border-border/50 bg-surface/40 shadow-sm">
                <span className="block text-foreground font-bold text-base">RTL / LTR</span>
                <span className="text-muted">{isArabic ? 'ثنائي اللغة' : 'Bilingual Mastery'}</span>
              </div>
              <div className="p-3 rounded-lg border border-border/50 bg-surface/40 shadow-sm">
                <span className="block text-foreground font-bold text-base">Gulf Agency</span>
                <span className="text-muted">{isArabic ? 'شريك أبيض' : 'White-Label'}</span>
              </div>
            </div>
            {/* CV Download & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/documents/Ahmed_Mohamed_Hasan_CV_EN.pdf"
                download="Ahmed_Mohamed_Hasan_CV_EN.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label={isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isArabic ? 'تحميل السيرة الذاتية' : 'Download CV'}</span>
              </a>
              <a
                href="https://github.com/ahsanelm39-star"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/70 bg-surface/60 text-foreground/80 text-xs font-semibold hover:border-accent/50 hover:text-accent transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-mohame-843909439"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/70 bg-surface/60 text-foreground/80 text-xs font-semibold hover:border-accent/50 hover:text-accent transition-all"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="pt-2">
              <Link
                href={`/${locale}/about`}
                className="group inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-accent transition-colors"
              >
                <span>{isArabic ? 'قراءة السيرة المهنية الكاملة' : 'Read Full Professional Background'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
