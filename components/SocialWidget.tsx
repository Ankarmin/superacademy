import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function SocialWidget() {
  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-xl lg:flex xl:right-6 xl:gap-4 xl:p-4">
      {[
        {
          label: "Facebook",
          icon: <FaFacebook className="w-5 h-5" />,
          color: "from-blue-400 to-blue-600",
          href: "https://www.facebook.com/SuperAcademyPro",
        },
        {
          label: "Instagram",
          icon: <FaInstagram className="w-5 h-5" />,
          color: "from-pink-400 to-purple-500",
          href: "https://www.instagram.com/superacademypro/",
        },
        {
          label: "YouTube",
          icon: <FaYoutube className="w-5 h-5" />,
          color: "from-red-400 to-red-600",
          href: "https://www.youtube.com/@SuperAcademyOficial",
        },
        {
          label: "TikTok",
          icon: <FaTiktok className="w-5 h-5" />,
          color: "from-black to-black",
          href: "https://www.tiktok.com/@superacademy_oficial?_r=1&_t=ZS-93WPwdbxtNE",
        },
      ].map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${s.label} de SuperAcademy`}
            title={s.label}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-xl transition-transform hover:scale-110 hover:rotate-3 xl:h-11 xl:w-11`}
          >
            {s.icon}
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition" />
          </a>
      ))}
    </div>
  );
}
