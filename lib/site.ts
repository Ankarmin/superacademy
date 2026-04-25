const DEFAULT_SITE_URL = "http://localhost:3000";

export type SocialLink = {
  key: "facebook" | "instagram" | "youtube" | "tiktok";
  label: string;
  href: string;
};

export const socialLinks: readonly SocialLink[] = [
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/SuperAcademyPro",
  },
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/superacademypro/",
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@SuperAcademyOficial",
  },
  {
    key: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/@superacademy_oficial?_r=1&_t=ZS-93WPwdbxtNE",
  },
] as const;

export const siteConfig = {
  name: "SuperAcademy",
  defaultTitle: "Academia Preuniversitaria en Lima | SuperAcademy",
  description:
    "Academia preuniversitaria en Lima con ciclos por areas en ciencias, matematicas y letras, simulacros, videoteca y recursos para acelerar tu ingreso.",
  ogImage: "/images/ciclo-mates.webp",
  keywords: [
    "academia preuniversitaria en Lima",
    "academia preuniversitaria",
    "ciclo ciencias",
    "ciclo matematicas",
    "ciclo letras",
    "ciclos preuniversitarios",
    "simulacros de admision",
    "videoteca preuniversitaria",
  ],
  socialLinks: socialLinks.map((link) => link.href),
};

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!siteUrl) {
    return DEFAULT_SITE_URL;
  }

  const normalizedSiteUrl = siteUrl.startsWith("http")
    ? siteUrl
    : `https://${siteUrl}`;

  return normalizedSiteUrl.replace(/\/$/, "");
}
