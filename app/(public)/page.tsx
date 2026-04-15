import type { Metadata } from "next";
import Slider from "../../components/home/Slider";
import FeaturedCards from "../../components/home/FeaturedCards";
import Testimonials from "../../components/home/Testimonials";
import { getSiteUrl, siteConfig } from "@/lib/site";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.defaultTitle,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: "/",
    images: [siteConfig.ogImage],
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    image: new URL(siteConfig.ogImage, siteUrl).toString(),
    sameAs: [...siteConfig.socialLinks],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Slider />
      <FeaturedCards />
      <Testimonials />
    </>
  );
}
