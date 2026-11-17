import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locale } from '@/lib/types';
import { PROJECTS } from '@/data/projects';
import CaseStudyView from '@/components/case-study/CaseStudyView';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export function generateStaticParams() {
  const locales: Locale[] = ['ar', 'en'];
  const params: { locale: string; slug: string }[] = [];

  locales.forEach((locale) => {
    PROJECTS.forEach((project) => {
      params.push({
        locale,
        slug: project.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale;
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const isArabic = locale === 'ar';
  const baseUrl = 'https://ahmed-web1.vercel.app';
  const canonicalUrl = `${baseUrl}/${locale}/work/${project.slug}`;

  let pageTitle = `${project.title[locale]} — ${
    isArabic ? 'دراسة حالة المشروع' : 'Client Case Study'
  }`;
  let description = project.summary[locale];

  if (project.slug === 'sakina-mental-health') {
    pageTitle = isArabic
      ? 'سَكينة | عيادات الصحة النفسية والاستشارات المتخصصة — دراسة حالة | AHMED.'
      : 'SAKINA | Mental Health Clinics & Counseling — Case Study | AHMED.';
    description = isArabic
      ? 'دراسة حالة لمشروع سَكينة، نموذج موقع متخصص في الصحة النفسية والاستشارات، يستعرض تنظيم الخدمات والمختصين وتجربة المستخدم والتصميم العربي.'
      : 'Explore the SAKINA mental healthcare website concept, showcasing structured service discovery, practitioner profiles, Arabic RTL design, and a clear consultation journey.';
  }

  return {
    title: {
      absolute: project.slug === 'sakina-mental-health' ? pageTitle : `${pageTitle} | AHMED.`,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `${baseUrl}/ar/work/${project.slug}`,
        en: `${baseUrl}/en/work/${project.slug}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: 'AHMED.',
      locale: isArabic ? 'ar_AR' : 'en_US',
      type: 'article',
      images: [
        {
          url: project.previewImage,
          width: 1200,
          height: 630,
          alt: project.title[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [project.previewImage],
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const locale = params.locale as Locale;
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} locale={locale} />;
}
