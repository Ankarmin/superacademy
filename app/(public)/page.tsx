import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Slider from "../../components/home/Slider";
import FeaturedCards from "../../components/home/FeaturedCards";
import WelcomeModal from "../../components/home/WelcomeModal";
import { getSiteUrl, siteConfig } from "@/lib/site";

const Testimonials = dynamic(() => import("../../components/home/Testimonials"));

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
      <WelcomeModal />
      <Slider />
      <FeaturedCards />
      <Testimonials />
    </>
  );
}
