import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import WhatsAppWidget from "../../components/layout/WhatsAppWidget";
import SocialWidget from "../../components/SocialWidget";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
