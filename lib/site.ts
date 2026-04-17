const DEFAULT_SITE_URL = "http://localhost:3000";

export const siteConfig = {
  name: "SuperAcademy",
  defaultTitle: "Academia Preuniversitaria en Lima | SuperAcademy",
  description:
    "Academia preuniversitaria en Lima con ciclos por areas en ciencias, matematicas y letras, simulacros, videoteca y recursos para acelerar tu ingreso.",
  ogImage: "/images/hero-1.jpg",
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
  socialLinks: [
    "https://www.facebook.com/SuperAcademyPro",
    "https://www.instagram.com/superacademypro/",
    "https://www.youtube.com/@SuperAcademyOficial",
    "https://www.tiktok.com/@superacademy_oficial?_r=1&_t=ZS-93WPwdbxtNE",
  ],
};

export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!siteUrl) {
    return DEFAULT_SITE_URL;
  }

  return siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;
}
