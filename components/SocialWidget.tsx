import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { socialLinks } from "@/lib/site";

const socialLinkPresentation = {
  facebook: {
    icon: <FaFacebook className="h-5 w-5" />,
    color: "from-blue-400 to-blue-600",
  },
  instagram: {
    icon: <FaInstagram className="h-5 w-5" />,
    color: "from-pink-400 to-purple-500",
  },
  youtube: {
    icon: <FaYoutube className="h-5 w-5" />,
    color: "from-red-400 to-red-600",
  },
  tiktok: {
    icon: <FaTiktok className="h-5 w-5" />,
    color: "from-black to-black",
  },
} as const;

export default function SocialWidget() {
  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-slate-200/60 bg-white/72 p-3 backdrop-blur-xl shadow-xl transition-colors dark:border-white/10 dark:bg-slate-950/28 lg:flex xl:right-6 xl:gap-4 xl:p-4">
      {socialLinks.map((socialLink) => {
        const presentation = socialLinkPresentation[socialLink.key];

        return (
          <a
            key={socialLink.key}
            href={socialLink.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${socialLink.label} de SuperAcademy`}
            title={socialLink.label}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${presentation.color} text-white shadow-xl transition-transform hover:scale-110 hover:rotate-3 xl:h-11 xl:w-11`}
          >
            {presentation.icon}
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          </a>
        );
      })}
    </div>
  );
}
