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
      <div className="flex-1 pt-[73px]">{children}</div>
      <Footer />
      <WhatsAppWidget />
      <SocialWidget />
    </div>
  );
}
