import dynamic from "next/dynamic";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

const WhatsAppWidget = dynamic(
  () => import("../../components/layout/WhatsAppWidget"),
);

const SocialWidget = dynamic(
  () => import("../../components/SocialWidget"),
);

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[100dvh] flex-col transition-colors duration-300">
      <Header />
      <main id="main-content" className="flex-1 pt-[80px] md:pt-[84px] lg:pt-[88px]">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
      <SocialWidget />
    </div>
  );
}
